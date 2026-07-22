import { CalendarDays, Hotel, Users } from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function BookingCard({ booking }) {
  return (
    <article className="overflow-hidden rounded-[2rem] bg-white shadow-lg shadow-slate-200/70 ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-800">
      <div className="flex items-start justify-between gap-4 bg-[#F5EFE6] p-6 dark:bg-slate-800">
        <div className="min-w-0">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#1F5F43] dark:text-emerald-300">Booking Reference</p>
          <h3 className="mt-2 truncate text-xl font-black text-slate-950 dark:text-white">
            {booking.bookingId || booking.id}
          </h3>
        </div>
        <StatusBadge status={booking.status} />
      </div>

      <div className="grid gap-3 p-6">
        <Info icon={Hotel} label="Room" value={booking.roomType || booking.room} />
        <Info icon={Users} label="Guests" value={booking.guests} />
        <div className="grid grid-cols-2 gap-3">
          <Info icon={CalendarDays} label="Check-in" value={booking.checkIn} />
          <Info icon={CalendarDays} label="Check-out" value={booking.checkOut} />
        </div>
      </div>
    </article>
  );
}

function Info({ label, value, icon: Icon }) {
  return (
    <div className="rounded-2xl bg-[#FAF9F6] p-4 ring-1 ring-slate-100 dark:bg-slate-950 dark:ring-slate-800">
      <Icon size={21} className="text-[#1F5F43] dark:text-emerald-300" />
      <p className="mt-3 text-sm font-black uppercase tracking-[0.14em] text-slate-500 dark:text-slate-300">{label}</p>
      <p className="mt-1 text-base font-black text-slate-900 dark:text-white">{value || '-'}</p>
    </div>
  );
}
