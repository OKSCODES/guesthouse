import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingButton() {
  const phone = (import.meta.env.VITE_CONTACT_PHONE || '+91 99999 99999').replace(/\s/g, '');
  const whatsapp = (import.meta.env.VITE_WHATSAPP_NUMBER || phone).replace(/\D/g, '');
  const text = encodeURIComponent('Hello Umpohliew Guest House, I want to make a booking request.');

  return (
    <div className="fixed bottom-24 right-4 z-40 flex flex-col gap-3 lg:bottom-6">
      <a href={`tel:${phone}`} className="tap-target rounded-full bg-white text-forest shadow-xl ring-1 ring-slate-200 dark:bg-slate-900 dark:text-emerald-300 dark:ring-slate-700" aria-label="Call Umpohliew Guest House">
        <Phone size={22} />
      </a>
      <a href={`https://wa.me/${whatsapp}?text=${text}`} target="_blank" rel="noreferrer" className="tap-target rounded-full bg-emerald-600 text-white shadow-xl active:scale-95" aria-label="Book on WhatsApp">
        <MessageCircle size={23} />
      </a>
    </div>
  );
}
