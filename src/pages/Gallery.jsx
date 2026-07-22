import { AnimatePresence, motion } from 'framer-motion';
import { Camera, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { gallery } from '../data/siteData';
import useSeo from '../hooks/useSeo';

const categories = ['All', 'Rooms', 'Exterior', 'Surroundings'];

export default function Gallery() {
  useSeo({ title: 'Gallery | Umpohliew Guest House', description: 'Rooms, exterior and surroundings gallery.' });
  const [active, setActive] = useState('All');
  const [preview, setPreview] = useState(null);
  const filtered = useMemo(() => active === 'All' ? gallery : gallery.filter((item) => item.cat === active), [active]);

  return (
    <main className="safe-bottom bg-[#faf9f6] dark:bg-slate-950">
      <section className="section pb-10">
        <div className="containerx">
          <p className="app-badge"><Camera size={17} /> Gallery</p>
          <h1 className="app-title mt-4">A Glimpse of Umpohliew</h1>
          <p className="app-subtitle mt-4 max-w-2xl">Explore rooms, exterior views and the calm surroundings that make the stay feel close to nature.</p>
          <div className="no-scrollbar mt-7 flex gap-3 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button key={cat} type="button" onClick={() => setActive(cat)} className={`min-h-12 shrink-0 rounded-full px-5 text-base font-black transition active:scale-95 ${active === cat ? 'bg-forest text-white shadow-lg shadow-emerald-900/20' : 'bg-white text-slate-700 shadow-soft dark:bg-slate-900 dark:text-slate-200'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="containerx columns-1 gap-6 sm:columns-2 lg:columns-3">
          {filtered.map((item, index) => (
            <motion.button
              key={`${item.src}-${index}`}
              type="button"
              onClick={() => setPreview(item)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group mb-6 block w-full overflow-hidden rounded-[2rem] bg-white text-left shadow-soft dark:bg-slate-900"
            >
              <div className="relative overflow-hidden">
                <img src={item.src} alt={item.cat} loading="lazy" className={`${index % 3 === 0 ? 'h-80' : 'h-64'} w-full object-cover transition duration-700 group-hover:scale-105`} />
                <span className="absolute left-4 top-4 inline-flex min-h-10 items-center rounded-full bg-white/90 px-4 text-base font-black text-forest backdrop-blur dark:bg-slate-950/85 dark:text-emerald-200">{item.cat}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {preview && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] grid place-items-center bg-black/82 p-5 backdrop-blur">
            <button type="button" onClick={() => setPreview(null)} className="absolute right-5 top-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-950 shadow-2xl" aria-label="Close image preview">
              <X size={27} />
            </button>
            <motion.div initial={{ scale: 0.96, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 20 }} className="w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl dark:bg-slate-900">
              <img src={preview.src} alt={preview.cat} className="max-h-[76vh] w-full object-cover" />
              <div className="p-5">
                <p className="text-[20px] font-black">{preview.cat}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
