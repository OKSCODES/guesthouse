import { HeartHandshake, MapPinned, Mountain, ShieldCheck, Sparkles, Users } from 'lucide-react';
import MapSection from '../components/MapSection';
import { attractions } from '../data/siteData';
import useSeo from '../hooks/useSeo';

export default function About() {
  useSeo({ title: 'About | Umpohliew Guest House', description: 'Story and location advantages of Umpohliew Guest House Meghalaya.' });

  return (
    <main className="safe-bottom bg-[#faf9f6] dark:bg-slate-950">
      <section className="section pb-10">
        <div className="containerx grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="app-badge"><HeartHandshake size={17} /> About</p>
            <h1 className="app-title mt-4">A peaceful home near Sohra</h1>
            <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-300">Umpohliew Guest House is designed for travellers who want a calm, nature-connected stay in Meghalaya. The guest house offers clean rooms, friendly hospitality and easy access to Sohra tourist spots.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Reason icon={ShieldCheck} title="Clean comfort" text="Simple, tidy rooms for restful nights." />
              <Reason icon={Users} title="Family friendly" text="Room options for couples, families and groups." />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80" alt="Meghalaya hills" loading="lazy" className="h-64 w-full rounded-[2rem] object-cover shadow-soft" />
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80" alt="Nature surroundings" loading="lazy" className="mt-10 h-64 w-full rounded-[2rem] object-cover shadow-soft" />
          </div>
        </div>
      </section>

      <section className="section bg-[#f5efe6] dark:bg-slate-900/70">
        <div className="containerx">
          <div className="max-w-3xl">
            <p className="app-badge"><Sparkles size={17} /> Stay experience</p>
            <h2 className="app-title mt-4">Local warmth with easy access to Meghalaya nature</h2>
            <p className="app-subtitle mt-4">Stay close to waterfalls, viewpoints, caves and peaceful village surroundings while enjoying direct support from the guest house.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Feature icon={Mountain} title="Nature-first stay" text="Built around calm surroundings, fresh air and a slow travel experience." />
            <Feature icon={MapPinned} title="Near attractions" text="Convenient base for Sohra routes, waterfalls and viewpoints." />
            <Feature icon={HeartHandshake} title="Helpful guidance" text="Get local guidance for travel timing, food and nearby places." />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="containerx grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="app-badge"><MapPinned size={17} /> Nearby</p>
            <h2 className="app-title mt-4">Explore Sohra and Cherrapunji routes</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {attractions.map((item) => <span key={item} className="app-badge bg-white dark:bg-slate-900">{item}</span>)}
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-6 shadow-soft dark:bg-slate-900 sm:p-8">
            <h3 className="text-[24px] font-black">Location advantages</h3>
            <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">The guest house is positioned for travellers who want quick access to Meghalaya’s nature spots while staying away from noisy, crowded areas.</p>
            <ul className="mt-6 grid gap-4">
              {['Near popular Sohra / Cherrapunji attractions', 'Comfortable rooms for families and groups', 'Local food and travel guidance available'].map((item) => (
                <li key={item} className="flex gap-3 text-base font-bold leading-7 text-slate-700 dark:text-slate-200"><ShieldCheck size={22} className="mt-0.5 shrink-0 text-forest dark:text-emerald-300" /> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="containerx">
          <MapSection />
        </div>
      </section>
    </main>
  );
}

function Reason({ icon: Icon, title, text }) {
  return (
    <div className="rounded-[2rem] bg-white p-5 shadow-soft dark:bg-slate-900">
      <Icon size={26} className="text-forest dark:text-emerald-300" />
      <p className="mt-4 text-[20px] font-black">{title}</p>
      <p className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-300">{text}</p>
    </div>
  );
}

function Feature({ icon: Icon, title, text }) {
  return (
    <article className="rounded-[2rem] bg-white p-6 shadow-soft dark:bg-slate-950">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-forest dark:bg-emerald-950 dark:text-emerald-200"><Icon size={27} /></span>
      <h3 className="mt-5 text-[20px] font-black">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{text}</p>
    </article>
  );
}
