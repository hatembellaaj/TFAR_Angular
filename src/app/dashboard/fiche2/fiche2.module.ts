import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { Fiche2RoutingModule } from './fiche2-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { Fiche2Component } from './fiche2.component';
import { PatientComponent } from './patient/patient.component';



@NgModule({
  declarations: [
    Fiche2Component,
    PatientComponent
  ],
  imports: [
    CommonModule,
    Fiche2RoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class Fiche2Module { }
