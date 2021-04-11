
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HopitalComponent } from './hopital/hopital.component';
import { ServiceComponent } from './service/service.component';
import { MedecinComponent } from './medecin/medecin.component';
import { FicheComponent } from './fiche/fiche.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { AddHopitalComponent } from './hopital/add-hopital/add-hopital.component';
import { EditHopitalComponent } from './hopital/edit-hopital/edit-hopital.component';
import { HopitalsListComponent } from './hopital/hopitals-list/hopitals-list.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HopitalComponent,
    ServiceComponent,
    MedecinComponent,
    FicheComponent,
    StatistiqueComponent,
    AddHopitalComponent,
    EditHopitalComponent,
    HopitalsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    LayoutModule,
    MaterialModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
