import { Component, inject } from '@angular/core';
import { Layout } from '../../util/layout';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  layout = inject(Layout);
}
