import { ExternalLink, MapPinned } from 'lucide-react';
import { MAP_URL } from './ResponsiveMap';

const GOOGLE_MAPS_OPEN_URL = 'https://www.google.com/maps/search/?api=1&query=Umpohliew%20Guest%20House%2C%20Meghalaya';

export default function MapSection() {
  return (
    <section className="rounded-[2rem] bg-white p-5 shadow-premium dark:bg-slate-900 sm:p-6">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="app-badge"><MapPinned size={17} /> Find Us</p>
          <h2 className="mt-4 text-[28px] font-black leading-tight sm:text-4xl">Umpohliew Guest House</h2>
          <p className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-300">Umpohliew Guest House, Meghalaya</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-[1.75rem] bg-slate-100 dark:bg-slate-800">
        <iframe
          title="Umpohliew Guest House Google Map"
          src={MAP_URL}
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[250px] w-full sm:h-[320px] lg:h-[400px]"
        />
      </div>

      <a href={GOOGLE_MAPS_OPEN_URL} target="_blank" rel="noreferrer" className="btn btn-primary mt-5 w-full">
        Open in Google Maps <ExternalLink size={20} />
      </a>
    </section>
  );
}
