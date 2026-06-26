import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImprintRoutingModule } from './imprint-routing.module';
import { ImprintComponent } from './imprint.component';

@NgModule({
  imports: [CommonModule, ImprintRoutingModule, ImprintComponent],
})
export class ImprintModule {}
