import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

// Initialize Prisma Client
// Note: In a real Next.js app, you'd extract this to a separate lib/prisma.ts file to prevent multiple instances during hot-reloading.
const prisma = new PrismaClient();

// 1. Define the Validation Schema using Zod
const inquirySchema = z.object({
  customerName: z.string().min(2, "Name must be at least 2 characters."),
  customerEmail: z.string().email("Invalid email format."),
  customerPhone: z.string().min(10, "Phone number is too short."),
  // Transforms the incoming ISO date string from the frontend into a native JS Date object for Prisma
  eventDate: z.string().transform((str) => new Date(str)),
  estimatedGuest: z.number().int().positive().optional(),
  message: z.string().min(10, "Please provide a brief description of your event."),
  // We expect an array of Service UUIDs from the frontend checkboxes
  serviceIds: z.array(z.string()).min(1, "Please select at least one service (e.g., Decoration).")
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 2. Validate the payload
    const validation = inquirySchema.safeParse(body);

    if (!validation.success) {
      // Return a 400 status with formatted Zod error messages for the frontend to display
      return NextResponse.json(
        { error: "Validation failed", details: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const {
      customerName,
      customerEmail,
      customerPhone,
      eventDate,
      estimatedGuest,
      message,
      serviceIds
    } = validation.data;

    // 3. Create the Inquiry and map the Many-to-Many relations
    const newInquiry = await prisma.customerInquiry.create({
      data: {
        customerName,
        customerEmail,
        customerPhone,
        eventDate,
        estimatedGuest,
        message,
        // Connecting by 'slug' instead of 'id'
        servicesRequested: {
          connect: serviceIds.map((slug) => ({ slug }))
        }
      },
      include: {
        servicesRequested: {
          select: { name: true, category: true } 
        }
      }
    });

    // 4. Format and Send the WhatsApp Notification with Detailed Logging
    const requestedServiceNames = newInquiry.servicesRequested.map(s => s.name).join(", ");
    const whatsappMessage = `
🎉 *New Inquiry: Limra Events* 🎉

*Name:* ${customerName}
*Phone:* ${customerPhone}
*Email:* ${customerEmail}
*Event Date:* ${eventDate.toDateString()}
*Guests:* ${estimatedGuest || 'Not specified'}
*Services:* ${requestedServiceNames}

*Message:* 
"${message}"
    `;

    const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;
    const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
    const ADMIN_NUMBER = process.env.ADMIN_WHATSAPP_NUMBER; 

    if (WHATSAPP_TOKEN && PHONE_NUMBER_ID && ADMIN_NUMBER) {
      const waResponse = await fetch(`https://graph.facebook.com/v18.0/${PHONE_NUMBER_ID}/messages`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${WHATSAPP_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: ADMIN_NUMBER,
          type: "text",
          text: { body: whatsappMessage },
        }),
      });

      // ADDED: Detailed error logging to debug the Meta API response
      const waData = await waResponse.json();
      if (!waResponse.ok) {
        console.error("[META_API_ERROR]", JSON.stringify(waData, null, 2));
      } else {
        console.log("[META_API_SUCCESS] Message sent!");
      }
    } else {
      console.warn("WhatsApp API credentials missing. Notification skipped.");
    }

    // 5. Return the successful response
    return NextResponse.json(
      { message: "Inquiry submitted successfully.", data: newInquiry },
      { status: 201 }
    );

  } catch (error) {
    console.error("[INQUIRY_POST_ERROR]", error);
    return NextResponse.json(
      { error: "Internal Server Error. Could not process the inquiry." },
      { status: 500 }
    );
  }
}