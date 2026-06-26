import { Component, inject } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, shareReplay, startWith, switchMap, tap } from 'rxjs/operators';
import { SiteTitleService } from '@red-probeaufgabe/core';
import {
  FhirSearchFn,
  IFhirPatient,
  IFhirPractitioner,
  IFhirSearchResponse,
  ISearchFormData,
} from '@red-probeaufgabe/types';
import { IUnicornTableColumn } from '@red-probeaufgabe/ui';
import { AbstractSearchFacadeService } from '@red-probeaufgabe/search';
import { GridContainerComponent } from '../ui/grid-container/grid-container.component';
import { SearchFormComponent } from '../ui/search-form/search-form.component';
import { UnicornTableComponent } from '../ui/unicorn-table/unicorn-table.component';
import { AsyncPipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DetailDialogComponent } from '../ui/detail-dialog/detail-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [GridContainerComponent, SearchFormComponent, UnicornTableComponent, AsyncPipe],
})
export class DashboardComponent {
  private siteTitleService = inject(SiteTitleService);
  private searchFacade = inject(AbstractSearchFacadeService);
  private dialog = inject(MatDialog);

  columns: Set<IUnicornTableColumn> = new Set<IUnicornTableColumn>([
    'number',
    'resourceType',
    'name',
    'gender',
    'birthDate',
  ]);
  isLoading = true;

  /** Subject das Suchparameter empfängt */
  private searchParams$ = new BehaviorSubject<ISearchFormData>({
    searchText: '',
    searchFuncSelect: FhirSearchFn.SearchAll,
  });

  /** Reaktiver Such-Stream: Reagiert auf neue Suchparameter */
  search$: Observable<IFhirSearchResponse<IFhirPatient | IFhirPractitioner>> = this.searchParams$.pipe(
    tap(() => (this.isLoading = true)),
    switchMap(({ searchFuncSelect, searchText }) => this.searchFacade.search(searchFuncSelect, searchText)),
    catchError(this.handleError),
    tap(() => (this.isLoading = false)),
    shareReplay(),
  );

  entries$: Observable<Array<IFhirPatient | IFhirPractitioner>> = this.search$.pipe(
    map((data) => data?.entry ?? []),
    startWith([]),
  );

  totalLength$ = this.search$.pipe(
    map((data) => data?.total ?? 0),
    startWith(0),
  );

  constructor() {
    this.siteTitleService.setSiteTitle('Dashboard');
  }

  /** Wird vom SearchFormComponent aufgerufen */
  onSearch(formData: ISearchFormData): void {
    this.searchParams$.next(formData);
  }

  onRowClick(row: IFhirPatient | IFhirPractitioner): void {
    this.dialog.open(DetailDialogComponent, {
      data: row,
      width: '500px',
    });
  }

  private handleError(): Observable<IFhirSearchResponse<IFhirPatient | IFhirPractitioner>> {
    return of({ entry: [], total: 0 });
  }
}
