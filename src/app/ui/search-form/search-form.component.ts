import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FhirSearchFn, ISearchFormData } from '@red-probeaufgabe/types';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
  @Output() searchEvent = new EventEmitter<ISearchFormData>();

  searchForm = new FormGroup({
    searchText: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(/^[a-zA-ZäöüÄÖÜß\s\-'.]+$/),
    ]),
    searchFuncSelect: new FormControl<FhirSearchFn>(FhirSearchFn.SearchAll, [Validators.required]),
  });

  /** Filter-Optionen für das Dropdown */
  searchFunctions = [
    { value: FhirSearchFn.SearchAll, label: 'Alle (Patienten + Ärzte)' },
    { value: FhirSearchFn.SearchPatients, label: 'Nur Patienten' },
    { value: FhirSearchFn.SearchPractitioners, label: 'Nur Ärzte' },
  ];

  onSubmit(): void {
    if (this.searchForm.valid) {
      this.searchEvent.emit(this.searchForm.value as ISearchFormData);
    }
  }
}