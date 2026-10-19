self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('push', (event) => {
  let data = { title: '📬 Nouveau mail', body: 'Vous avez un nouveau message' };
  try { if (event.data) data = { ...data, ...event.data.json() }; } catch (e) {}
  event.waitUntil(self.registration.showNotification(data.title, { body: data.body, icon: '/icon-192.png' }));
});