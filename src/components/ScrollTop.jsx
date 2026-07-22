import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="app-touch fixed bottom-[calc(10.5rem+env(safe-area-inset-bottom))] left-4 z-50 h-14 w-14 rounded-full bg-white text-forest shadow-premium ring-1 ring-slate-200 transition hover:-translate-y-1 dark:bg-slate-900 dark:text-emerald-300 dark:ring-slate-700 lg:bottom-6 lg:left-auto lg:right-6"
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
}
