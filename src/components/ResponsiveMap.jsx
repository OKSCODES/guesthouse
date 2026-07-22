import { ExternalLink } from 'lucide-react';

export const MAP_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5427459120897!2d91.71784127516659!3d25.28596287765399!2m3!1f0!2f0!3f0!2m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37508d65132ae3d3%3A0xa25a987f6dded73!2sUmpohliew%20Guest%20House!5e0!3m2!1sen!2sin!4v1781605934368!5m2!1sen!2sin';
const OPEN_MAP_URL = 'https://www.google.com/maps/search/?api=1&query=Umpohliew%20Guest%20House%20Meghalaya';

export default function ResponsiveMap({ className = '' }) {
  return (
    <section className={`rounded-[2rem] bg-white p-3 shadow-soft ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-800 ${className}`}>
      <div className="overflow-hidden rounded-[1.5rem]">
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
      <div className="mt-3 grid gap-3 sm:flex sm:items-center sm:justify-between">
        <p className="px-1 text-sm font-bold text-slate-600 dark:text-slate-300">Umpohliew Guest House, Meghalaya</p>
        <a href={OPEN_MAP_URL} target="_blank" rel="noreferrer" className="btn btn-primary w-full sm:w-auto">
          Open in Google Maps <ExternalLink size={18} />
        </a>
      </div>
    </section>
  );
}
