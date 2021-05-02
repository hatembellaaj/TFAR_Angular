import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HopitalRoutingModule } from './hopital-routing.module';
import { HopitalComponent } from './hopital.component';
import { HopitalDtDialogComponent } from './hopitalDtDialog/hopital-dt-dialog.component';
import { HopitalDialogComponent } from './hopitalDialog/hopital-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    HopitalComponent,
    HopitalDtDialogComponent,
    HopitalDialogComponent
  ],
  imports: [
    CommonModule,
    HopitalRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class HopitalModule { }
