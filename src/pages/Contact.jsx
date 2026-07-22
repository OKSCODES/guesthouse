import { Clock, Mail, MapPinned, MessageCircle, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import ResponsiveMap from '../components/ResponsiveMap';
import useSeo from '../hooks/useSeo';
import { createContact } from '../services/firestoreService';

export default function Contact() {
  useSeo({ title: 'Contact | Umpohliew Guest House', description: 'Contact Umpohliew Guest House for bookings and questions.' });
  const [f, setF] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const phone = import.meta.env.VITE_CONTACT_PHONE || '+91 99999 99999';
  const cleanPhone = phone.replace(/\s/g, '');
  const wa = import.meta.env.VITE_WHATSAPP_NUMBER || phone.replace(/\D/g, '');
  const email = import.meta.env.VITE_CONTACT_EMAIL || 'stay@umpohliew.com';

  const submit = async (e) => {
    e.preventDefault();
    if (!f.name || !f.message) return toast.error('Name and message required');
    setLoading(true);
    try {
      await createContact(f);
      toast.success('Message sent');
      setF({ name: '', email: '', phone: '', message: '' });
    } catch {
      toast.error('Could not send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="safe-bottom bg-[#faf9f6] dark:bg-slate-950">
      <section className="section pb-10">
        <div className="containerx">
          <div className="max-w-3xl">
            <p className="app-badge"><MessageCircle size={17} /> Contact</p>
            <h1 className="app-title mt-4">Talk to Us</h1>
            <p className="app-subtitle mt-4">Call, WhatsApp or send a message for booking support and location help.</p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <ContactAction href={`tel:${cleanPhone}`} icon={Phone} title="Call" text={phone} />
            <ContactAction href={`https://wa.me/${wa}?text=Hello%20Umpohliew%20Guest%20House,%20I%20want%20to%20book%20a%20room.`} icon={MessageCircle} title="WhatsApp" text="Direct booking request" external />
            <ContactAction href={`mailto:${email}`} icon={Mail} title="Email" text={email} />
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="containerx grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <form onSubmit={submit} className="rounded-[2rem] bg-white p-6 shadow-premium dark:bg-slate-900 sm:p-8">
            <h2 className="text-[28px] font-black">Send a Message</h2>
            <p className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-300">We will respond with booking and availability details.</p>
            <div className="mt-6 grid gap-5">
              <Field label="Name">
                <input className="input" placeholder="Your name" autoComplete="name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
              </Field>
              <Field label="Email">
                <input className="input" type="email" placeholder="Email address" autoComplete="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
              </Field>
              <Field label="Phone">
                <input className="input" placeholder="Phone number" inputMode="tel" autoComplete="tel" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} />
              </Field>
              <Field label="Message">
                <textarea className="input min-h-36" placeholder="Tell us your date, room preference or question..." value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
              </Field>
              <button disabled={loading} className="btn btn-primary w-full disabled:opacity-60">
                {loading ? 'Sending...' : 'Send Message'} <Send size={20} />
              </button>
            </div>
          </form>

          <div className="grid gap-6">
            <div className="rounded-[2rem] bg-white p-6 shadow-soft dark:bg-slate-900 sm:p-8">
              <h2 className="text-[28px] font-black">Visit Umpohliew Guest House</h2>
              <div className="mt-5 grid gap-4">
                <Info icon={MapPinned} title="Address" text="Umpohliew Guest House, Meghalaya" />
                <Info icon={Clock} title="Support hours" text="Call or WhatsApp for latest room availability." />
              </div>
            </div>
            <ResponsiveMap />
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactAction({ href, icon: Icon, title, text, external = false }) {
  return (
    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className="group rounded-[2rem] bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-premium dark:bg-slate-900">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-forest transition group-hover:scale-105 dark:bg-emerald-950 dark:text-emerald-200"><Icon size={27} /></span>
      <h2 className="mt-4 text-[20px] font-black">{title}</h2>
      <p className="mt-1 break-words text-base leading-7 text-slate-600 dark:text-slate-300">{text}</p>
    </a>
  );
}

function Info({ icon: Icon, title, text }) {
  return (
    <div className="flex gap-4 rounded-[1.5rem] bg-[#f5efe6] p-4 dark:bg-slate-800">
      <Icon size={24} className="mt-1 shrink-0 text-forest dark:text-emerald-300" />
      <div>
        <p className="text-base font-black">{title}</p>
        <p className="text-base leading-7 text-slate-600 dark:text-slate-300">{text}</p>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-black text-slate-700 dark:text-slate-200">{label}</span>
      {children}
    </label>
  );
}
