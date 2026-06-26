import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {
  IFhirPatient,
  IFhirPractitioner,
  IPreparedIFhirPatient,
  IPreparedIFhirPractitioner,
} from '@red-probeaufgabe/types';
import { FhirUtilService } from '@red-probeaufgabe/search';
import { DialogDetailRowComponent } from '../dialog-detail-row/dialog-detail-row.component';

@Component({
  selector: 'app-detail-dialog',
  imports: [MatDialogModule, MatButtonModule, DialogDetailRowComponent],
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.scss'],
})
export class DetailDialogComponent {
  private fhirUtil = inject(FhirUtilService);
  private rawData: IFhirPatient | IFhirPractitioner = inject(MAT_DIALOG_DATA);

  preparedData: IPreparedIFhirPatient | IPreparedIFhirPractitioner = this.fhirUtil.prepareData(this.rawData);

  get resourceType(): string {
    return this.rawData.resourceType ?? 'Unbekannt';
  }

  get name(): string {
    return this.preparedData.name?.join(', ') ?? 'Unbekannt';
  }

  get gender(): string {
    return this.rawData.gender ?? 'Unbekannt';
  }

  get birthDate(): string {
    return this.rawData.birthDate ?? 'Unbekannt';
  }

  get address(): string {
    return this.preparedData.address?.join('\n') ?? 'Keine Adresse vorhanden';
  }

  get id(): string {
    return this.rawData.id ?? 'Unbekannt';
  }
}
