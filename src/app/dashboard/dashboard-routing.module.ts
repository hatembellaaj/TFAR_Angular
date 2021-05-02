import { StatistiqueModule } from './statistique/statistique.module';
import { FicheModule } from './fiche/fiche.module';
import { MedecinModule } from './medecin/medecin.module';
import { ServiceModule } from './service/service.module';
import { HopitalModule } from './hopital/hopital.module';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'', component:DashboardComponent ,children: [{
  path: 'hopital',
  loadChildren: () =>
    import('src/app/dashboard/hopital/hopital.module').then((m) => HopitalModule)
},
{
  path: 'service',
  loadChildren: () =>
    import('src/app/dashboard/service/service.module').then((m) => ServiceModule)
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
