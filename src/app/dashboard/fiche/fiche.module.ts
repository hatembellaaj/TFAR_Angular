import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FicheRoutingModule } from './fiche-routing.module';
import { FicheComponent } from './fiche.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    FicheComponent
  ],
  imports: [
    CommonModule,
    FicheRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class FicheModule { }
