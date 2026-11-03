import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Layout {
  private query =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(max-width: 768px)')
      : null;

  isMobile = signal(this.query?.matches ?? false);

  sidebarOpen = signal(!this.isMobile());

  constructor() {
    this.query?.addEventListener('change', (e) => {
      this.isMobile.set(e.matches);
      this.sidebarOpen.set(!e.matches);
    });
  }

  toggleSidebar() {
    this.sidebarOpen.update((open) => !open);
  }
  closeOnMobile() {
    if (this.isMobile()) this.sidebarOpen.set(false);
  }
}
