import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedecinRoutingModule } from './medecin-routing.module';
import { MedecinComponent } from './medecin.component';


@NgModule({
  declarations: [
    MedecinComponent
  ],
  imports: [
    CommonModule,
    MedecinRoutingModule
  ]
})
export class MedecinModule { }
