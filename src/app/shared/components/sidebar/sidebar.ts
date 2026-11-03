import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Layout } from '../../util/layout';

interface MenuItem {
  label: string;
  icon: string;
  route?: string;
  children?: { label: string; route: string }[];
}

@Component({
  imports: [[RouterLink, RouterLinkActive]],
  selector: 'app-sidebar',
  styleUrl: './sidebar.scss',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  layout = inject(Layout);
  menu: MenuItem[] = [
    { label: 'Dashboard', icon: 'grid_view', route: '/dashboard' },
    {
      label: 'Notes',
      icon: 'menu_book',
      children: [
        { label: 'CCTL', route: '/notes/cctl' },
        { label: 'General', route: '/notes/general' },
        { label: 'Magistral', route: '/notes/magistral' },
        { label: 'Project', route: '/notes/project' },
      ],
    },
    { label: 'Equipment', icon: 'work', route: '/equipment' },
    { label: 'Attendance', icon: 'event_available', route: '/attendance' },
    { label: 'Documents', icon: 'description', route: '/documents' },
  ];

  openGroup = signal<string | null>('Dashboard');

  toggle(label: string) {
    if (!this.layout.sidebarOpen()) {
      this.layout.sidebarOpen.set(true);
      this.openGroup.set(label);
      return;
    }
    this.openGroup.update((current) => (current === label ? null : label));
  }
}
