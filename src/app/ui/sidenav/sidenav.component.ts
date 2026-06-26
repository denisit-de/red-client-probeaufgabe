import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  imports: [
    MatSidenavContainer,
    MatSidenav,
    ToolbarComponent,
    MatSidenavContent,
    MatToolbar,
    MatIconButton,
    MatIcon,
    AsyncPipe,
  ],
})
export class SidenavComponent {
  private breakpointObserver = inject(BreakpointObserver);

  @Input() mainToolbarTitle = '';
  @Input() menuToolbarTitle = '';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay(),
  );
}
