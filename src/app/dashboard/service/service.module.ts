import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ServiceDialogComponent } from './serviceDialog/service-dialog.component';
import { ServiceDtDialogComponent } from './serviceDtDialog/service-dt-dialog.component';



@NgModule({
  declarations: [

     ServiceComponent,
     ServiceDialogComponent,
     ServiceDtDialogComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule

  ],
  entryComponents: [
    ServiceDialogComponent
  ]
})
export class ServiceModule { }
