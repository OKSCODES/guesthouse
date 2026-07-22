import { Inbox } from 'lucide-react';

export default function EmptyState({ title = 'Nothing here yet', text = 'New information will appear here automatically.', action = null }) {
  return (
    <div className="app-card app-card-padded grid min-h-56 place-items-center text-center">
      <div className="max-w-sm">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-forest-soft text-forest dark:bg-emerald-500/15 dark:text-emerald-200">
          <Inbox size={30} />
        </span>
        <h2 className="mt-5 text-[20px] font-black text-slate-950 dark:text-white">{title}</h2>
        <p className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-300">{text}</p>
        {action && <div className="mt-5">{action}</div>}
      </div>
    </div>
  );
}
