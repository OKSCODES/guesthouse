import { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { BedDouble, Filter, ShieldCheck, Star } from 'lucide-react';
import RoomCard from '../components/RoomCard';
import Skeleton from '../components/Skeleton';
import { rooms as fallbackRooms } from '../data/siteData';
import useSeo from '../hooks/useSeo';
import { subscribeRooms } from '../services/roomService';

export default function Rooms() {
  useSeo({ title: 'Rooms & Pricing | Umpohliew Guest House', description: 'Standard, Deluxe and Family rooms at Umpohliew Guest House.' });
  const [rooms, setRooms] = useState(fallbackRooms);
  const [loading, setLoading] = useState(true);
  const [guestFilter, setGuestFilter] = useState('all');

  useEffect(() => {
    const unsubscribe = subscribeRooms(
      (items) => {
        setRooms(items.length > 0 ? items : fallbackRooms);
        setLoading(false);
      },
      () => {
        toast.error('Showing default rooms. Firebase rooms could not load.');
        setRooms(fallbackRooms);
        setLoading(false);
      }
    );
    return unsubscribe;
  }, []);

  const filteredRooms = useMemo(() => {
    if (guestFilter === 'all') return rooms;
    const minGuests = Number(guestFilter);
    return rooms.filter((room) => Number(room.guests || 2) >= minGuests);
  }, [rooms, guestFilter]);

  return (
    <main className="safe-bottom bg-[#faf9f6] dark:bg-slate-950">
      <section className="section pb-10">
        <div className="containerx">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="app-badge"><BedDouble size={17} /> Rooms</p>
              <h1 className="app-title mt-4">Rooms & Pricing</h1>
              <p className="app-subtitle mt-4 max-w-2xl">Airbnb-style room cards with clear pricing, amenities and direct booking for a peaceful Meghalaya stay.</p>
            </div>
            <div className="rounded-[2rem] bg-white p-4 shadow-soft dark:bg-slate-900">
              <label className="app-label mb-2"><Filter size={17} /> Filter by guests</label>
              <select value={guestFilter} onChange={(event) => setGuestFilter(event.target.value)} className="input">
                <option value="all">All rooms</option>
                <option value="2">2+ guests</option>
                <option value="3">3+ guests</option>
                <option value="5">5+ guests</option>
              </select>
            </div>
          </div>

          <div className="mt-8 grid gap-4 rounded-[2rem] bg-[#f5efe6] p-4 dark:bg-slate-900 sm:grid-cols-3">
            <Info icon={Star} title="4.8 rated" text="Guest-friendly stay" />
            <Info icon={ShieldCheck} title="Direct booking" text="Admin approval workflow" />
            <Info icon={BedDouble} title="Flexible rooms" text="Couple and family options" />
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="containerx">
          {loading ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {[1, 2, 3].map((item) => <Skeleton key={item} className="h-[520px] rounded-[2rem]" />)}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredRooms.map((room) => <RoomCard key={room.id} room={room} />)}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function Info({ icon: Icon, title, text }) {
  return (
    <div className="flex items-center gap-4 rounded-[1.5rem] bg-white p-4 shadow-soft dark:bg-slate-950">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-forest dark:bg-emerald-950 dark:text-emerald-200"><Icon size={23} /></span>
      <div>
        <p className="text-base font-black">{title}</p>
        <p className="text-base text-slate-600 dark:text-slate-300">{text}</p>
      </div>
    </div>
  );
}
