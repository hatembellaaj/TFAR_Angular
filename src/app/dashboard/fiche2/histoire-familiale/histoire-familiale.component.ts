
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'fiche2-histoire-familiale',
  templateUrl: './histoire-familiale.component.html',
  styleUrls: ['./histoire-familiale.component.css']
})
export class HistoireFamilialeComponent implements OnInit,DoCheck {

  dcdp:any;

  nfsv:any;

  nfsv1:any;

  dpaf:any;

  dpaf1:any;

  dpaf2:any;

  dpaf3:any;

  dpaf4:any;

  tab:number[] = [];

  tab2:number[] = [];



  dConsanguiniteParent=['NP','Absence','Endogamme','Lointaine','Double cousins germains (2 eme degre)','Cousins germains(3 eme degre)'];



  constructor() { }
  ngDoCheck(): void {


  }

  ngOnInit(): void {
    this.dcdp=this.dConsanguiniteParent[0];
    this.rempTab();
    this.nfsv=this.tab[0];
    this.rempTab2();
    this.dpaf=this.tab2[0];


    }

    rempTab(){
      for (let i = 0; i <= 10; i++) {
        this.tab.push(i);
    }
    this.nfsv=this.tab[0];
    console.log(this.nfsv);


  }

  rempTab2(){
    for (let i = 0; i <= 5; i++) {
      this.tab2.push(i);
  }



}
}
