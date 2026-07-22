import { Download, Smartphone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const STORAGE_KEY = 'umpohliew_pwa_prompt_closed';

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
      if (localStorage.getItem(STORAGE_KEY) !== 'true') {
        window.setTimeout(() => setVisible(true), 1400);
      }
    };

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
  }, []);

  const close = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setVisible(false);
  };

  const install = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === 'accepted') toast.success('App install started');
    setDeferredPrompt(null);
    close();
  };

  if (!visible || !deferredPrompt) return null;

  return (
    <div className="fixed inset-x-4 bottom-[calc(6rem+env(safe-area-inset-bottom))] z-[70] mx-auto max-w-md animate-slide-up rounded-[1.75rem] border border-white/70 bg-white/95 p-4 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/95 lg:bottom-6">
      <div className="flex items-start gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-forest-soft text-forest dark:bg-emerald-500/15 dark:text-emerald-200">
          <Smartphone size={26} />
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-[20px] font-black leading-tight text-slate-950 dark:text-white">Install Umpohliew</h2>
          <p className="mt-1 text-base leading-6 text-slate-600 dark:text-slate-300">Open faster next time and book like a mobile app.</p>
          <div className="mt-4 grid grid-cols-[1fr_auto] gap-3">
            <button type="button" onClick={install} className="app-button app-button-primary min-h-12 px-4">
              <Download size={20} /> Install
            </button>
            <button type="button" onClick={close} aria-label="Close install prompt" className="app-touch rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-100">
              <X size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
