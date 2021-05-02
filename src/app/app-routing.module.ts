import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: '',
loadChildren: () => import('src/app/login/login.module').then((m) => LoginModule) },
{ path: 'dashboard', loadChildren: () => import('src/app/dashboard/dashboard.module').then((m) => DashboardModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
