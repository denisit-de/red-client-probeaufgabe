import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SearchModule } from '@red-probeaufgabe/search';
import { UiModule } from '@red-probeaufgabe/ui';

@NgModule({
  imports: [CommonModule, UiModule, SearchModule, DashboardRoutingModule, DashboardComponent],
  exports: [DashboardComponent],
})
export class DashboardModule {}
