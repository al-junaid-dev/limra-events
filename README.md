# Limra Events | Premium Event Management

A high-end, cinematic web application built for a luxury event management company. This platform features dynamic server-rendered service pages, an asymmetric bento-grid gallery, and a fully integrated consultation form that delivers validated leads directly to the admin via the Meta WhatsApp Graph API.

## 🌟 Key Features

* **Cinematic UI/UX:** Built with Tailwind CSS, featuring glassmorphism, smooth scrolling, and scroll-triggered animations powered by Framer Motion.
* **Dynamic Routing:** Utilizes Next.js 15 asynchronous route parameters to generate highly detailed, data-driven service pages (e.g., `/services/decoration`, `/services/lighting`) from a single template.
* **Automated WhatsApp Notifications:** Seamless integration with the official Meta Graph API to instantly text form submissions directly to the business owner.
* **Robust Data Validation:** End-to-end type safety and strict form validation using Zod to prevent invalid data or incomplete phone numbers.
* **Relational Database:** Powered by Supabase (PostgreSQL) and managed via Prisma ORM for scalable storage of services and customer inquiries.
* **Premium UX Details:** Includes native Next.js skeleton loading states for seamless page transitions and a custom, scalable SVG monogram favicon.

## 🛠️ Tech Stack

* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Database:** PostgreSQL (hosted on Supabase)
* **ORM:** Prisma
* **Validation:** Zod
* **External APIs:** Meta WhatsApp Business Graph API

## ⚙️ Environment Variables

To run this project locally, you will need to add the following variables to a `.env` file in the root directory:

```env
# Supabase Database URLs
DATABASE_URL="postgresql://postgres.xxx:xxx@aws-0-xxx.pooler.supabase.com:6543/postgres"
DIRECT_URL="postgresql://postgres.xxx:xxx@aws-0-xxx.pooler.supabase.com:5432/postgres"

# Meta WhatsApp API Credentials (for lead notifications)
WHATSAPP_TOKEN="your_meta_temporary_or_system_user_token"
WHATSAPP_PHONE_NUMBER_ID="your_meta_phone_number_id"
ADMIN_WHATSAPP_NUMBER="919876543210" # Verified receiving number (Country code + Number, no + sign)
