import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PfrSideMenuComponent, TitleColor } from 'pfr-side-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PfrSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pfr-testbed-app';

  TitleColor = TitleColor;
  isAutheticated = signal(true);
}
