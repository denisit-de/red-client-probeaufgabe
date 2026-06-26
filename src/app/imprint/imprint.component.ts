import { Component, inject } from '@angular/core';
import { SiteTitleService } from '@red-probeaufgabe/core';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
})
export class ImprintComponent {
  private siteTitleService = inject(SiteTitleService);

  constructor() {
    this.siteTitleService.setSiteTitle('Imprint');
  }
}
