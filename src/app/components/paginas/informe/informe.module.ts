import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformeRoutingModule } from './informe-routing.module';
import { InformeComponent } from './informe.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [InformeComponent],
  imports: [
    CommonModule,
    InformeRoutingModule,
    ChartsModule
  ]
})
export class InformeModule { }
