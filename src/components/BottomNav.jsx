import { BedDouble, CalendarCheck, Home, Phone, Shield } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const items = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/rooms', label: 'Rooms', icon: BedDouble },
  { to: '/booking', label: 'Book', icon: CalendarCheck, featured: true },
  { to: '/contact', label: 'Contact', icon: Phone },
  { to: '/admin/login', label: 'Admin', icon: Shield },
];

export default function BottomNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] lg:hidden"
      aria-label="Primary bottom navigation"
    >
      <div className="mx-auto grid min-h-[72px] max-w-md grid-cols-5 gap-2 rounded-[2rem] border border-white/80 bg-white/95 p-2 shadow-[0_-18px_50px_rgba(31,41,55,0.18)] backdrop-blur-2xl dark:border-slate-800/80 dark:bg-slate-950/95">
        {items.map(({ to, label, icon: Icon, featured }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `group relative flex min-h-14 min-w-0 flex-col items-center justify-center gap-1 rounded-[1.4rem] px-1 text-[14px] font-black leading-none transition duration-200 active:scale-95 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#D4A95D]/80 ${
                isActive
                  ? 'bg-[#1F5F43] text-white shadow-[0_16px_34px_rgba(31,95,67,0.26)]'
                  : featured
                    ? 'text-[#1F5F43] dark:text-emerald-300'
                    : 'text-slate-600 hover:bg-[#EAF5EF] hover:text-[#143F2C] dark:text-slate-300 dark:hover:bg-slate-800'
              }`
            }
            aria-label={label === 'Book' ? 'Book a room' : label}
          >
            {({ isActive }) => (
              <>
                {featured && !isActive ? (
                  <span className="absolute -top-4 grid h-11 w-11 place-items-center rounded-full bg-[#D4A95D] text-[#221A0F] shadow-[0_12px_28px_rgba(212,169,93,0.34)] ring-4 ring-white dark:ring-slate-950">
                    <Icon size={26} strokeWidth={2.7} />
                  </span>
                ) : (
                  <Icon size={isActive ? 27 : 25} strokeWidth={isActive ? 2.8 : 2.45} />
                )}
                <span className={`${featured && !isActive ? 'mt-7' : ''}`}>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
