import { Loader2 } from 'lucide-react';

export default function LoadingState({ title = 'Loading', text = 'Please wait a moment.' }) {
  return (
    <div role="status" aria-live="polite" className="app-card app-card-padded grid min-h-48 place-items-center text-center">
      <div>
        <Loader2 className="mx-auto animate-spin text-forest dark:text-emerald-300" size={34} />
        <h2 className="mt-4 text-[20px] font-black text-slate-950 dark:text-white">{title}</h2>
        <p className="mt-2 text-base text-slate-600 dark:text-slate-300">{text}</p>
      </div>
    </div>
  );
}
