import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {
  MatTableDataSource,
  MatTable,
  MatColumnDef,
  MatHeaderCellDef,
  MatHeaderCell,
  MatCellDef,
  MatCell,
  MatHeaderRowDef,
  MatHeaderRow,
  MatRowDef,
  MatRow,
} from '@angular/material/table';
import { IUnicornTableColumn } from '../models';
import { IFhirPatient, IFhirPractitioner } from '@red-probeaufgabe/types';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-unicorn-table',
  templateUrl: './unicorn-table.component.html',
  styleUrls: ['./unicorn-table.component.scss'],
  imports: [
    MatProgressSpinner,
    MatTable,
    MatColumnDef,
    MatHeaderCellDef,
    MatHeaderCell,
    MatCellDef,
    MatCell,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRowDef,
    MatRow,
    MatPaginator,
    DatePipe,
  ],
})
export class UnicornTableComponent implements OnInit {
  dataSource = new MatTableDataSource<IFhirPatient | IFhirPractitioner>([]);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  @Input() columns: Set<IUnicornTableColumn> = new Set<IUnicornTableColumn>();
  @Input() totalLength = 0;
  @Input() isLoading = false;

  @Output() rowClick = new EventEmitter<IFhirPatient | IFhirPractitioner>();

  @Input()
  set entries(value: Array<IFhirPatient | IFhirPractitioner>) {
    this.dataSource.data = value;
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
