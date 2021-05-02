import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HopitalComponent } from './hopital.component';

const routes: Routes = [{path:'',component:HopitalComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HopitalRoutingModule { }
