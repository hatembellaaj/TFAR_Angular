import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FicheComponent } from './fiche/fiche.component';
import { HopitalComponent } from './hopital/hopital.component';
import { MedecinComponent } from './medecin/medecin.component';
import { ServiceComponent } from './service/service.component';
import { StatistiqueComponent } from './statistique/statistique.component';

const routes: Routes = [{path: 'hopital', component: HopitalComponent },
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
