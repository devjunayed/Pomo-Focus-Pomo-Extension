export function notifyUser(title: string, options: { body?: string; icon?: string }) {
  if (Notification.permission === "granted") {
    new Notification(title, options);
  }
}
