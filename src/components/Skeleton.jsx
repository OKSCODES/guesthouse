export default function Skeleton({ className = '', rounded = 'rounded-[1.75rem]' }) {
  return (
    <div
      aria-hidden="true"
      className={`skeleton-shimmer ${rounded} bg-slate-200/90 dark:bg-slate-800 ${className}`}
    />
  );
}

export function SkeletonLine({ className = '' }) {
  return <Skeleton rounded="rounded-full" className={`h-4 ${className}`} />;
}

export function SkeletonButton({ className = '' }) {
  return <Skeleton rounded="rounded-full" className={`h-14 ${className}`} />;
}

export function SkeletonCard({ className = '' }) {
  return (
    <div className={`app-card app-card-padded grid gap-5 ${className}`}>
      <Skeleton className="aspect-[16/10] w-full" />
      <div className="grid gap-3">
        <SkeletonLine className="h-5 w-3/4" />
        <SkeletonLine className="w-full" />
        <SkeletonLine className="w-2/3" />
      </div>
      <SkeletonButton className="w-full" />
    </div>
  );
}

export function BookingSkeleton() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <div className="app-card app-card-padded grid gap-5">
        <SkeletonLine className="h-6 w-48" />
        <div className="grid gap-4 sm:grid-cols-2">
          <Skeleton className="h-16" />
          <Skeleton className="h-16" />
        </div>
        <Skeleton className="h-64" />
        <SkeletonButton className="w-full" />
      </div>
      <div className="app-card app-card-padded hidden gap-4 lg:grid">
        <SkeletonLine className="h-6 w-40" />
        <SkeletonLine className="w-full" />
        <SkeletonLine className="w-3/4" />
        <SkeletonButton className="w-full" />
      </div>
    </div>
  );
}
