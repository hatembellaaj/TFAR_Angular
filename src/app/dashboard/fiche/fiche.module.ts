import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FicheRoutingModule } from './fiche-routing.module';
import { FicheComponent } from './fiche.component';


@NgModule({
  declarations: [
    FicheComponent
  ],
  imports: [
    CommonModule,
    FicheRoutingModule
  ]
})
export class FicheModule { }
