import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FicheComponent } from './fiche/fiche.component';
import { AddHopitalComponent } from './hopital/add-hopital/add-hopital.component';
import { EditHopitalComponent } from './hopital/edit-hopital/edit-hopital.component';
import { HopitalComponent } from './hopital/hopital.component';
import { HopitalsListComponent } from './hopital/hopitals-list/hopitals-list.component';
import { MedecinComponent } from './medecin/medecin.component';
import { ServiceComponent } from './service/service.component';
import { StatistiqueComponent } from './statistique/statistique.component';

const routes: Routes = [{path: 'hopital', component: HopitalComponent ,children : [
  { path: '', pathMatch: 'full', redirectTo: 'hopitals-list' },
  { path: 'add-hopital', component: AddHopitalComponent  },
  { path: 'edit-hopital/:Code_hopitale', component: EditHopitalComponent },
  { path: 'hopitals-list', component: HopitalsListComponent}]},
  {path: 'service', component: ServiceComponent },
  {path: 'medecin', component: MedecinComponent},
  {path: 'fiche', component: FicheComponent },
  {path: 'statistique', component: StatistiqueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
