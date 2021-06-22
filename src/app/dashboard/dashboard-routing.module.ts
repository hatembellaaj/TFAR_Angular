import { DepartementModule } from './departement/departement.module';
import { StatistiqueModule } from './statistique/statistique.module';
import { FicheModule } from './fiche/fiche.module';
import { MedecinModule } from './medecin/medecin.module';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganismeModule } from 'src/app/dashboard/organisme/organisme.module';
import { Fiche2Module } from 'src/app/dashboard/fiche2/fiche2.module';

const routes: Routes = [{path:'', component:DashboardComponent ,children: [{
  path: 'organisme',
  loadChildren: () =>
    import('src/app/dashboard/organisme/organisme.module').then((m) => OrganismeModule)
},
{
  path: 'departement',
  loadChildren: () =>
    import('src/app/dashboard/departement/departement.module').then((m) => DepartementModule)
}
,
{
  path: 'medecin',
  loadChildren: () =>
    import('src/app/dashboard/medecin/medecin.module').then((m) => MedecinModule)
}
,
{
  path: 'fiche',
  loadChildren: () =>
    import('src/app/dashboard/fiche/fiche.module').then((m) => FicheModule)
}
,
{
  path: 'fiche2',
  loadChildren: () =>
    import('src/app/dashboard/fiche2/fiche2.module').then((m) => Fiche2Module)
},
{
  path: 'statistique',
  loadChildren: () =>
    import('src/app/dashboard/statistique/statistique.module').then((m) => StatistiqueModule)
}
,{ path: '', pathMatch: 'full', redirectTo: 'hopital' }]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
