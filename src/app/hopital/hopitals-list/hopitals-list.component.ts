import { Hopital } from './../../../model/hopital';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HopitalService } from 'src/app/service/hopital.service';

@Component({
  selector: 'app-hopitals-list',
  templateUrl: './hopitals-list.component.html',
  styleUrls: ['./hopitals-list.component.css']
})
export class HopitalsListComponent implements OnInit {

  hopitals$:Observable<Hopital[]> |null=null;

  constructor(private hopitalsService:HopitalService, private router:Router) { }

 ngOnInit(): void {
  this.onGetAllHopitals();
 }

 onGetAllHopitals() {
  this.hopitals$= this.hopitalsService.getAllHopilals();
}

 onDelete(h: Hopital) {
    let v=confirm("Etes vous sûre?");
    if(v==true)

    this.hopitalsService.deleteHopital(h).subscribe(
      data=>{this.onGetAllHopitals();}
    )
 }

 onNewHopital() {
   this.router.navigateByUrl("/add-hopital");
 }

 onEdit(h: Hopital) {
   this.router.navigateByUrl("/edit-hopital/"+h.Code_hopitale);
 }
}
