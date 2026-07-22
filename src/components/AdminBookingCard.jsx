import { Check, Trash2, X } from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function AdminBookingCard({ booking, loading, onApprove, onReject, onDelete }) {
  return (
    <article className="rounded-3xl bg-white p-4 shadow-soft ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-800">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-black">{booking.name}</h3>
          <p className="text-sm text-slate-500">{booking.bookingId || booking.id}</p>
        </div>
        <StatusBadge status={booking.status} />
      </div>

      <div className="mt-4 grid gap-2 text-sm text-slate-600 dark:text-slate-300">
        <p><span className="font-bold text-slate-900 dark:text-white">Phone:</span> {booking.phone}</p>
        <p><span className="font-bold text-slate-900 dark:text-white">Email:</span> {booking.email}</p>
        <p><span className="font-bold text-slate-900 dark:text-white">Room:</span> {booking.roomType || booking.room}</p>
        <p><span className="font-bold text-slate-900 dark:text-white">Stay:</span> {booking.checkIn} → {booking.checkOut}</p>
        <p><span className="font-bold text-slate-900 dark:text-white">Guests:</span> {booking.guests}</p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2">
        <button disabled={loading} onClick={() => onApprove(booking)} className="btn min-h-12 rounded-2xl bg-emerald-600 px-3 text-white disabled:opacity-60">
          <Check size={18} /> Approve
        </button>
        <button disabled={loading} onClick={() => onReject(booking)} className="btn min-h-12 rounded-2xl bg-amber-500 px-3 text-white disabled:opacity-60">
          <X size={18} /> Reject
        </button>
        <button disabled={loading} onClick={() => onDelete(booking)} className="btn col-span-2 min-h-12 rounded-2xl bg-red-50 px-3 text-red-600 disabled:opacity-60 dark:bg-red-950/40">
          <Trash2 size={18} /> Delete
        </button>
      </div>
    </article>
  );
}
