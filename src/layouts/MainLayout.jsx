import { Toaster } from 'react-hot-toast';
import { Link, Outlet } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import FloatingButton from '../components/FloatingButton';
import MobileNavbar from '../components/MobileNavbar';
import PWAInstallPrompt from '../components/PWAInstallPrompt';
import ScrollTop from '../components/ScrollTop';
import useDarkMode from '../hooks/useDarkMode';

export default function MainLayout() {
  const [dark, setDark] = useDarkMode();

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAF9F6] pb-24 text-slate-900 antialiased dark:bg-slate-950 dark:text-white lg:pb-0">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3200,
          className: 'toast-premium',
          success: { iconTheme: { primary: '#1F5F43', secondary: '#ffffff' } },
          error: { iconTheme: { primary: '#b42318', secondary: '#ffffff' } },
        }}
      />
      <MobileNavbar dark={dark} onToggleDark={() => setDark(!dark)} />
      <Outlet />
      <FloatingButton />
      <BottomNav />
      <PWAInstallPrompt />

      <footer className="bg-slate-950 px-6 py-12 text-white">
        <div className="containerx grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-[24px] font-black leading-tight">Umpohliew Guest House</h3>
            <p className="mt-3 text-base leading-7 text-slate-300">Experience Peace in Nature near Sohra, Meghalaya.</p>
          </div>
          <div>
            <h4 className="text-base font-black">Contact</h4>
            <a href={`tel:${import.meta.env.VITE_CONTACT_PHONE || '+91 99999 99999'}`} className="mt-3 block min-h-11 text-base font-bold text-slate-300 underline-offset-4 hover:underline">
              {import.meta.env.VITE_CONTACT_PHONE || '+91 99999 99999'}
            </a>
            <p className="text-base text-slate-300">{import.meta.env.VITE_CONTACT_EMAIL || 'stay@umpohliew.com'}</p>
          </div>
          <div>
            <h4 className="text-base font-black">Quick Links</h4>
            <Link to="/booking" className="mt-3 block min-h-11 text-base font-black text-emerald-300 underline-offset-4 hover:underline">Book Now</Link>
            <Link to="/admin/login" className="block min-h-11 text-base font-bold text-slate-400 underline-offset-4 hover:underline">Admin</Link>
          </div>
        </div>
      </footer>
      <ScrollTop />
    </div>
  );
}
