import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ILink } from '@red-probeaufgabe/types';
import { MatNavList, MatListItem } from '@angular/material/list';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
  imports: [MatNavList, MatListItem, RouterLinkActive, RouterLink, MatIcon],
})
export class NavListComponent {
  @Input() links: ILink[];
  @Output() linkClicked: EventEmitter<string> = new EventEmitter();

  onLinkClicked(label: string) {
    this.linkClicked.emit(label);
  }
}
