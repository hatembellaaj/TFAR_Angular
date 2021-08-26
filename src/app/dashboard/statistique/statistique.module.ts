import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatistiqueRoutingModule } from './statistique-routing.module';
import { StatistiqueComponent } from './statistique.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StatistiqueComponent
  ],
  imports: [
    CommonModule,
    StatistiqueRoutingModule,
    MaterialModule,
    FormsModule 
  ]
})
export class StatistiqueModule { }
