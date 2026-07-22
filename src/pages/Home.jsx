import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, IndianRupee, MapPinned, MessageCircle, Mountain, Phone, ShieldCheck, Sparkles, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import ResponsiveMap from '../components/ResponsiveMap';
import RoomCard from '../components/RoomCard';
import { attractions, gallery, rooms } from '../data/siteData';
import useSeo from '../hooks/useSeo';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Home() {
  useSeo({
    title: 'Umpohliew Guest House | Premium Nature Stay in Meghalaya',
    description: 'Book a peaceful, affordable guest house stay near Sohra and Cherrapunji attractions in Meghalaya.',
  });

  const phone = (import.meta.env.VITE_CONTACT_PHONE || '+91 99999 99999').replace(/\s/g, '');
  const whatsapp = (import.meta.env.VITE_WHATSAPP_NUMBER || phone).replace(/\D/g, '');
  const text = encodeURIComponent('Hello Umpohliew Guest House, I want to book a room.');

  return (
    <main className="safe-bottom overflow-hidden bg-[#faf9f6] dark:bg-slate-950">
      <section className="relative min-h-[92dvh] overflow-hidden text-white">
        <div className="absolute inset-0 hero-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#143f2c]/45 to-[#143f2c]/90" />
        <div className="containerx relative flex min-h-[92dvh] flex-col justify-end px-6 pb-10 pt-28 sm:justify-center lg:pt-32">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-4xl">
            <div className="mb-5 flex flex-wrap gap-3">
              <span className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white/18 px-4 text-base font-black backdrop-blur"><Star size={19} className="fill-[#d4a95d] text-[#d4a95d]" /> 4.8 guest rated</span>
              <span className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white/18 px-4 text-base font-black backdrop-blur"><MapPinned size={19} /> Meghalaya nature stay</span>
            </div>
            <h1 className="app-hero-title text-balance">Experience Peace in Nature</h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/92 sm:text-xl">A warm guest house for families, couples and travellers exploring Sohra, waterfalls, caves and the quiet beauty of Meghalaya.</p>
            <div className="mt-8 grid gap-4 sm:flex sm:flex-wrap">
              <Link to="/booking" className="btn bg-white text-forest shadow-2xl shadow-black/20">Book Now <ArrowRight size={21} /></Link>
              <Link to="/rooms" className="btn border border-white/45 bg-white/12 text-white backdrop-blur">View Rooms</Link>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:hidden">
              <a href={`tel:${phone}`} className="btn bg-white/16 text-white backdrop-blur"><Phone size={20} /> Call</a>
              <a href={`https://wa.me/${whatsapp}?text=${text}`} target="_blank" rel="noreferrer" className="btn bg-[#25D366] text-white"><MessageCircle size={20} /> WhatsApp</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 -mt-16 px-6">
        <div className="containerx grid gap-4 rounded-[2rem] bg-white p-4 shadow-premium dark:bg-slate-900 sm:grid-cols-3 sm:p-5">
          <Trust icon={ShieldCheck} title="Verified stay" text="Real location and direct booking support." />
          <Trust icon={IndianRupee} title="Honest pricing" text="Rooms from ₹1,800 per night." />
          <Trust icon={Users} title="Family friendly" text="Rooms for couples, groups and families." />
        </div>
      </section>

      <section className="section">
        <div className="containerx grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="app-badge"><Sparkles size={17} /> Popular stays</p>
            <h2 className="app-title mt-4">Rooms made for calm Meghalaya mornings</h2>
            <p className="app-subtitle mt-4 max-w-2xl">Choose a clean, cozy room with essential comfort, scenic surroundings and quick direct booking.</p>
          </div>
          <div className="grid grid-cols-3 gap-3 rounded-[2rem] bg-[#f5efe6] p-4 dark:bg-slate-900">
            <Stat value="3" label="Room types" />
            <Stat value="4.8" label="Guest score" />
            <Stat value="24/7" label="Support" />
          </div>
        </div>
        <div className="containerx mt-8">
          <div className="no-scrollbar flex gap-6 overflow-x-auto pb-5 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
            {rooms.map((room) => <RoomCard key={room.id} room={room} compact />)}
          </div>
        </div>
      </section>

      <section className="section bg-[#f5efe6] dark:bg-slate-900/70">
        <div className="containerx">
          <div className="max-w-3xl">
            <p className="app-badge"><BadgeCheck size={17} /> Why choose us</p>
            <h2 className="app-title mt-4">A local stay that feels personal, peaceful and trusted</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              [Mountain, 'Scenic surroundings', 'Wake up to fresh air, hills and peaceful village atmosphere.'],
              [MapPinned, 'Near Sohra routes', 'Easy access to popular waterfalls, caves and viewpoints.'],
              [MessageCircle, 'Direct assistance', 'Call or WhatsApp the guest house before confirming your stay.'],
            ].map(([Icon, title, text]) => (
              <motion.article whileHover={{ y: -5 }} key={title} className="rounded-[2rem] bg-white p-6 shadow-soft dark:bg-slate-950">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-forest dark:bg-emerald-950 dark:text-emerald-200"><Icon size={27} /></span>
                <h3 className="mt-5 text-[20px] font-black">{title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="containerx grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="app-badge"><MapPinned size={17} /> Location</p>
            <h2 className="app-title mt-4">Find us easily on Google Maps</h2>
            <p className="app-subtitle mt-4">Open the map on your phone and navigate directly to Umpohliew Guest House.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {attractions.map((item) => <span className="app-badge bg-white dark:bg-slate-900" key={item}>{item}</span>)}
            </div>
          </div>
          <ResponsiveMap />
        </div>
      </section>

      <section className="section bg-white dark:bg-slate-950">
        <div className="containerx grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="app-badge"><Star size={17} /> Guest experience</p>
            <h2 className="app-title mt-4">Simple comfort, local warmth and peaceful nights</h2>
            <p className="app-subtitle mt-4">Guests choose Umpohliew for a calmer base while exploring Meghalaya’s most loved nature spots.</p>
            <Link to="/gallery" className="btn btn-soft mt-6">View Gallery <ArrowRight size={20} /></Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {gallery.slice(0, 4).map((item, index) => (
              <img key={item.src} src={item.src} alt={`${item.cat} preview`} loading="lazy" className={`h-44 w-full rounded-[1.75rem] object-cover shadow-soft ${index % 2 ? 'mt-8' : ''}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="containerx rounded-[2rem] bg-gradient-to-br from-[#1f5f43] to-[#143f2c] p-6 text-white shadow-premium sm:p-10 lg:p-14">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-[32px] font-black leading-tight sm:text-5xl">Ready to reserve your stay?</h2>
              <p className="mt-4 text-lg leading-8 text-white/85">Send a booking request now. The admin will approve and confirm your room.</p>
            </div>
            <Link to="/booking" className="btn bg-white text-forest">Book Now <ArrowRight size={21} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Trust({ icon: Icon, title, text }) {
  return (
    <div className="flex items-center gap-4 rounded-[1.5rem] p-3">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eaf5ef] text-forest dark:bg-emerald-950 dark:text-emerald-200"><Icon size={25} /></span>
      <div>
        <p className="text-base font-black text-slate-950 dark:text-white">{title}</p>
        <p className="text-base leading-6 text-slate-600 dark:text-slate-300">{text}</p>
      </div>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-[1.5rem] bg-white p-4 text-center shadow-soft dark:bg-slate-950">
      <p className="text-2xl font-black text-forest dark:text-emerald-300">{value}</p>
      <p className="mt-1 text-base font-bold text-slate-600 dark:text-slate-300">{label}</p>
    </div>
  );
}
