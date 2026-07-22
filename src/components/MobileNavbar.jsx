import { AnimatePresence, motion } from 'framer-motion';
import {
  BedDouble,
  CalendarCheck,
  Home,
  Image,
  Info,
  Menu,
  Moon,
  Phone,
  Shield,
  Sun,
  X,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home', icon: Home, description: 'Welcome and highlights' },
  { to: '/rooms', label: 'Rooms', icon: BedDouble, description: 'View stays and prices' },
  { to: '/booking', label: 'Book Now', icon: CalendarCheck, description: 'Reserve your stay' },
  { to: '/gallery', label: 'Gallery', icon: Image, description: 'Rooms and surroundings' },
  { to: '/about', label: 'About', icon: Info, description: 'Our story and location' },
  { to: '/contact', label: 'Contact', icon: Phone, description: 'Call, WhatsApp, map' },
  { to: '/admin/login', label: 'Admin', icon: Shield, description: 'Management access' },
];

export default function MobileNavbar({ dark, onToggleDark }) {
  const [open, setOpen] = useState(false);

  const phone = useMemo(
    () => (import.meta.env.VITE_CONTACT_PHONE || '+91 99999 99999').replace(/\s/g, ''),
    []
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-[#FAF9F6]/90 shadow-[0_14px_38px_rgba(31,41,55,0.08)] backdrop-blur-2xl dark:border-slate-800/80 dark:bg-slate-950/90">
      <nav className="containerx flex min-h-[72px] items-center justify-between gap-4 px-6">
        <Link
          onClick={() => setOpen(false)}
          to="/"
          className="group flex min-w-0 items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#D4A95D]/80"
          aria-label="Go to Umpohliew Guest House home"
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[1.35rem] bg-[#EAF5EF] text-2xl shadow-sm ring-1 ring-[#1F5F43]/10 transition group-active:scale-95 dark:bg-emerald-950/50">
            🏡
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-[18px] font-black tracking-[-0.04em] text-[#143F2C] dark:text-emerald-200 sm:text-[22px]">
              Umpohliew
            </span>
            <span className="block truncate text-[14px] font-extrabold text-slate-500 dark:text-slate-400">
              Guest House
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {links.slice(0, 6).map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-full px-5 py-3 text-[16px] font-extrabold transition focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#D4A95D]/80 ${
                  isActive
                    ? 'bg-[#1F5F43] text-white shadow-[0_14px_32px_rgba(31,95,67,0.22)]'
                    : 'text-slate-700 hover:bg-[#EAF5EF] hover:text-[#143F2C] dark:text-slate-200 dark:hover:bg-slate-800'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={`tel:${phone}`}
            className="hidden h-14 min-w-14 items-center justify-center rounded-full bg-white text-[#143F2C] shadow-sm ring-1 ring-[#E6E1D8] transition active:scale-95 dark:bg-slate-900 dark:text-emerald-200 dark:ring-slate-800 sm:inline-flex"
            aria-label="Call Umpohliew Guest House"
          >
            <Phone size={24} strokeWidth={2.5} />
          </a>

          <button
            type="button"
            onClick={onToggleDark}
            className="grid h-14 w-14 place-items-center rounded-full bg-white text-[#143F2C] shadow-sm ring-1 ring-[#E6E1D8] transition active:scale-95 dark:bg-slate-900 dark:text-emerald-200 dark:ring-slate-800"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={24} strokeWidth={2.5} /> : <Moon size={24} strokeWidth={2.5} />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-14 w-14 place-items-center rounded-full bg-[#1F5F43] text-white shadow-[0_14px_30px_rgba(31,95,67,0.24)] transition active:scale-95 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={28} strokeWidth={2.7} /> : <Menu size={28} strokeWidth={2.7} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[72px] z-50 bg-slate-950/45 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              onClick={(event) => event.stopPropagation()}
              className="ml-auto flex h-[calc(100dvh-72px)] w-[90vw] max-w-sm flex-col overflow-y-auto rounded-l-[2rem] bg-[#FAF9F6] p-6 shadow-2xl dark:bg-slate-950"
              aria-label="Main mobile navigation menu"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[14px] font-black uppercase tracking-[0.22em] text-[#1F5F43] dark:text-emerald-300">
                    Menu
                  </p>
                  <h2 className="mt-2 text-[32px] font-black leading-none tracking-[-0.05em] text-[#143F2C] dark:text-white">
                    Plan your stay
                  </h2>
                  <p className="mt-3 text-[16px] font-semibold leading-7 text-slate-600 dark:text-slate-300">
                    Explore rooms, check the location, and book directly.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-[#143F2C] shadow-sm ring-1 ring-[#E6E1D8] transition active:scale-95 dark:bg-slate-900 dark:text-white dark:ring-slate-800"
                  aria-label="Close menu"
                >
                  <X size={26} strokeWidth={2.6} />
                </button>
              </div>

              <div className="mt-8 grid gap-4">
                {links.map(({ to, label, icon: Icon, description }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `group flex min-h-[72px] items-center gap-4 rounded-[1.5rem] px-5 py-4 transition active:scale-[0.98] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#D4A95D]/80 ${
                        isActive
                          ? 'bg-[#1F5F43] text-white shadow-[0_18px_38px_rgba(31,95,67,0.25)]'
                          : 'bg-white text-slate-800 shadow-sm ring-1 ring-[#E6E1D8] hover:bg-[#EAF5EF] dark:bg-slate-900 dark:text-slate-100 dark:ring-slate-800 dark:hover:bg-slate-800'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={`grid h-14 w-14 shrink-0 place-items-center rounded-[1.2rem] ${
                            isActive
                              ? 'bg-white/15 text-white'
                              : 'bg-[#EAF5EF] text-[#1F5F43] dark:bg-emerald-950/40 dark:text-emerald-300'
                          }`}
                        >
                          <Icon size={26} strokeWidth={2.5} />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[17px] font-black leading-tight">{label}</span>
                          <span className={`mt-1 block text-[14px] font-semibold leading-5 ${isActive ? 'text-white/80' : 'text-slate-500 dark:text-slate-400'}`}>
                            {description}
                          </span>
                        </span>
                      </>
                    )}
                  </NavLink>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <a href={`tel:${phone}`} className="app-button app-button-primary w-full">
                  <Phone size={22} strokeWidth={2.6} />
                  Call Guest House
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
