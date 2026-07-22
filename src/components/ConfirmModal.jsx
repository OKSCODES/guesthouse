import { motion } from 'framer-motion';

export default function ConfirmModal({ open, title = 'Are you sure?', message, confirmText = 'Delete', loading, onCancel, onConfirm }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-end bg-slate-950/60 p-4 backdrop-blur-sm sm:place-items-center">
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="w-full max-w-md rounded-[2rem] bg-white p-6 shadow-2xl dark:bg-slate-900 dark:text-white"
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-modal-title"
      >
        <h2 id="confirm-modal-title" className="text-2xl font-black leading-tight">{title}</h2>
        <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{message || 'This action cannot be undone.'}</p>
        <div className="mt-7 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="min-h-14 rounded-2xl bg-[#F5EFE6] px-5 text-base font-black text-slate-800 transition focus:outline-none focus:ring-4 focus:ring-[#D4A95D]/30 active:scale-95 disabled:opacity-60 dark:bg-slate-800 dark:text-slate-100"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className="min-h-14 rounded-2xl bg-red-600 px-5 text-base font-black text-white transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-red-200 active:scale-95 disabled:opacity-60"
          >
            {loading ? 'Processing...' : confirmText}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
