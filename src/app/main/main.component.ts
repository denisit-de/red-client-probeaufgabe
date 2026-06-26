import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SiteTitleService } from '@red-probeaufgabe/core';
import { SidenavComponent } from '../ui/sidenav/sidenav.component';
import { NavListComponent } from '../ui/nav-list/nav-list.component';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [SidenavComponent, NavListComponent, RouterOutlet, AsyncPipe],
})
export class MainComponent {
  private siteTitleService = inject(SiteTitleService);

  title$: Observable<string> = this.siteTitleService.getSiteTitleObserver();

  menuToolbarTitle = 'Menu';
  sidenavLinks = [
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: 'dashboard',
    },
    {
      label: 'Imprint',
      href: '/imprint',
      icon: 'info',
    },
  ];

  onLinkClicked(label: string) {
    this.siteTitleService.setSiteTitle(label);
  }
}
