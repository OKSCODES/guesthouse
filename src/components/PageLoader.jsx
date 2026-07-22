import { SkeletonCard, SkeletonLine } from './Skeleton';

export default function PageLoader({ label = 'Loading Umpohliew experience' }) {
  return (
    <main className="app-page" role="status" aria-live="polite" aria-label={label}>
      <section className="app-section pt-28">
        <div className="app-container grid gap-8">
          <div className="grid gap-4">
            <SkeletonLine className="h-10 w-40" />
            <SkeletonLine className="h-14 w-full max-w-xl" />
            <SkeletonLine className="h-5 w-full max-w-2xl" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard className="hidden lg:grid" />
          </div>
        </div>
      </section>
      <span className="sr-only">{label}</span>
    </main>
  );
}
