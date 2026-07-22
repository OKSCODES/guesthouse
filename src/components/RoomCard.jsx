import { motion } from 'framer-motion';
import { ArrowRight, BedDouble, CheckCircle2, ShieldCheck, Star, Users, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';

const fallbackImage = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80';

export default function RoomCard({ room, compact = false, selected = false, onSelect }) {
  const image = room.img || room.images?.[0] || fallbackImage;
  const rating = room.rating || '4.8';
  const reviews = room.reviews || '120+';
  const bed = room.bed || room.bedType || (room.guests > 3 ? '2 beds' : 'Queen bed');
  const description = room.description || 'A clean, calm and comfortable room designed for a peaceful Meghalaya stay.';

  const CardContent = (
    <motion.article
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.985 }}
      className={`group h-full overflow-hidden rounded-[2rem] border bg-white shadow-soft transition dark:border-slate-800 dark:bg-slate-900 ${
        selected ? 'border-forest ring-4 ring-emerald-700/15' : 'border-[#e6e1d8]'
      } ${compact ? 'w-[86vw] max-w-[360px] shrink-0 sm:w-auto sm:max-w-none' : ''}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={image}
          srcSet={`${image}&w=480 480w, ${image}&w=900 900w, ${image}&w=1200 1200w`}
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 48vw, 33vw"
          alt={room.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
        <span className="absolute left-4 top-4 inline-flex min-h-10 items-center rounded-full bg-white/95 px-4 text-base font-black text-forest shadow-lg backdrop-blur dark:bg-slate-950/90 dark:text-emerald-300">
          ₹{Number(room.price || 0).toLocaleString('en-IN')}/night
        </span>
        <span className="absolute bottom-4 left-4 inline-flex min-h-10 items-center gap-2 rounded-full bg-white/95 px-4 text-base font-black text-slate-900 shadow-lg backdrop-blur dark:bg-slate-950/90 dark:text-white">
          <Star size={18} className="fill-[#d4a95d] text-[#d4a95d]" /> {rating}
          <span className="font-bold text-slate-500 dark:text-slate-300">({reviews})</span>
        </span>
      </div>

      <div className="grid gap-5 p-6">
        <div>
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-[20px] font-black leading-tight text-slate-950 dark:text-white sm:text-2xl">{room.name}</h3>
            <span className="rounded-full bg-emerald-50 px-3 py-2 text-sm font-black text-forest dark:bg-emerald-950/40 dark:text-emerald-200">Available</span>
          </div>
          <p className="mt-3 line-clamp-2 text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Meta icon={Users} label={`Up to ${room.guests || 2} guests`} />
          <Meta icon={BedDouble} label={bed} />
          <Meta icon={Wifi} label="Fast Wi-Fi" />
          <Meta icon={ShieldCheck} label="Verified stay" />
        </div>

        <div className="flex flex-wrap gap-2">
          {(room.amenities || []).slice(0, 4).map((amenity) => (
            <span key={amenity} className="inline-flex min-h-9 items-center rounded-full bg-[#f5efe6] px-3 text-sm font-extrabold text-[#143f2c] dark:bg-slate-800 dark:text-emerald-100">
              <CheckCircle2 size={15} className="mr-1.5 text-[#d4a95d]" /> {amenity}
            </span>
          ))}
        </div>

        {onSelect ? (
          <button type="button" onClick={() => onSelect(room.id)} className="btn btn-primary w-full">
            {selected ? 'Selected Room' : 'Select Room'} <ArrowRight size={20} />
          </button>
        ) : (
          <Link to={`/booking?room=${room.id}`} className="btn btn-primary w-full">
            Book Now <ArrowRight size={20} />
          </Link>
        )}
      </div>
    </motion.article>
  );

  return CardContent;
}

function Meta({ icon: Icon, label }) {
  return (
    <div className="flex min-h-12 items-center gap-2 rounded-2xl bg-slate-50 px-3 text-base font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
      <Icon size={19} className="shrink-0 text-forest dark:text-emerald-300" />
      <span className="truncate">{label}</span>
    </div>
  );
}
