function ensurePwaHeadTags() {
  if (!document.querySelector('link[rel="manifest"]')) {
    const manifest = document.createElement('link');
    manifest.rel = 'manifest';
    manifest.href = '/manifest.webmanifest';
    document.head.appendChild(manifest);
  }

  if (!document.querySelector('meta[name="theme-color"]')) {
    const theme = document.createElement('meta');
    theme.name = 'theme-color';
    theme.content = '#1F5F43';
    document.head.appendChild(theme);
  }

  if (!document.querySelector('meta[name="apple-mobile-web-app-capable"]')) {
    const apple = document.createElement('meta');
    apple.name = 'apple-mobile-web-app-capable';
    apple.content = 'yes';
    document.head.appendChild(apple);
  }
}

export function registerServiceWorker() {
  if (typeof window === 'undefined') return;

  ensurePwaHeadTags();

  if (!('serviceWorker' in navigator)) return;
  if (import.meta.env.DEV) return;

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // PWA registration is a progressive enhancement; app still works normally.
    });
  });
}
