import { CalendarCheck, ShieldCheck } from 'lucide-react';
import BookingFlow from '../components/BookingFlow';
import useSeo from '../hooks/useSeo';

export default function Booking() {
  useSeo({
    title: 'Book Now | Umpohliew Guest House',
    description: 'Mobile-first room booking at Umpohliew Guest House Meghalaya.',
  });

  return (
    <main className="safe-bottom bg-[#faf9f6] dark:bg-slate-950">
      <section className="section pb-8">
        <div className="containerx">
          <div className="max-w-3xl">
            <p className="app-badge"><CalendarCheck size={17} /> Booking</p>
            <h1 className="app-title mt-4">Reserve Your Stay</h1>
            <p className="app-subtitle mt-4">A Booking.com-style request flow with room selection, guest details, summary and live status tracking after submission.</p>
          </div>
          <div className="mt-6 rounded-[2rem] bg-white p-4 shadow-soft dark:bg-slate-900 sm:p-5">
            <div className="flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-forest dark:bg-emerald-950 dark:text-emerald-200"><ShieldCheck size={26} /></span>
              <div>
                <h2 className="text-[20px] font-black">No instant payment required</h2>
                <p className="mt-1 text-base leading-7 text-slate-600 dark:text-slate-300">Submit your booking request first. The guest house admin will approve and confirm availability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 pb-24">
        <div className="containerx">
          <BookingFlow />
        </div>
      </section>
    </main>
  );
}
