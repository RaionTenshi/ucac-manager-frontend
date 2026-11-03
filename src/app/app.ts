import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './shared/components/atoms/button/button';
import { Sidebar } from './shared/components/sidebar/sidebar';
import { Navbar } from './shared/components/navbar/navbar';

@Component({
  imports: [RouterOutlet, Button, Sidebar, Navbar],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ucac-manager');
}
