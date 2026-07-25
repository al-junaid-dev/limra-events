export default function Loading() {
  return (
    <div className="bg-background min-h-screen pb-24 pt-32">
      {/* Cinematic Header Skeleton */}
      <section className="w-full flex flex-col items-center justify-center px-6 mb-16 space-y-6">
        <div className="h-4 w-32 bg-surface rounded-sm animate-pulse border border-surface-hover"></div>
        <div className="h-16 md:h-20 w-full max-w-2xl bg-surface rounded-sm animate-pulse border border-surface-hover"></div>
        <div className="h-4 w-64 bg-surface rounded-sm animate-pulse border border-surface-hover"></div>
      </section>

      {/* Main Content & Bento Grid Skeleton */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-12">
          {/* Overview text skeleton */}
          <div className="space-y-4">
            <div className="h-8 w-48 bg-surface rounded-sm animate-pulse mb-6"></div>
            <div className="h-4 w-full bg-surface-hover rounded-sm animate-pulse"></div>
            <div className="h-4 w-5/6 bg-surface-hover rounded-sm animate-pulse"></div>
            <div className="h-4 w-4/6 bg-surface-hover rounded-sm animate-pulse"></div>
          </div>

          {/* Bento Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="md:col-span-2 md:row-span-2 h-64 md:h-[416px] bg-surface rounded-sm animate-pulse border border-surface-hover"></div>
            <div className="md:col-span-1 md:row-span-1 h-48 md:h-[200px] bg-surface rounded-sm animate-pulse border border-surface-hover"></div>
            <div className="md:col-span-1 md:row-span-1 h-48 md:h-[200px] bg-surface rounded-sm animate-pulse border border-surface-hover"></div>
          </div>
        </div>

        {/* Right Column: Sticky CTA Skeleton */}
        <div className="lg:col-span-4 relative">
          <div className="h-64 w-full bg-surface rounded-sm animate-pulse border border-surface-hover"></div>
        </div>
      </div>
    </div>
  );
}