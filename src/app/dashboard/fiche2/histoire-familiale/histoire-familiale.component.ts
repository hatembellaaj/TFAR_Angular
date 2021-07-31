import { Fiche } from './../../../../model/fiche';

import { Component, OnInit, DoCheck, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'fiche2-histoire-familiale',
  templateUrl: './histoire-familiale.component.html',
  styleUrls: ['./histoire-familiale.component.css']
})
export class HistoireFamilialeComponent implements OnInit, DoCheck {


  fiche1!: Fiche;

  tab2: number[] = [0,1,2,3,4,5];

  tab: number[] = [0,1,2,3,4,5,6,7,8,9,10];



  dConsanguiniteParent = ['NP', 'Absence', 'Endogamme', 'Lointaine', 'Double cousins germains (2 eme degre)', 'Cousins germains(3 eme degre)'];

  constructor() {
  }


  ngDoCheck(): void {


  }

  ngOnInit(): void {
    /*this.rempTab();
    this.rempTab2();*/

    this.fiche1 = { degConsang: 'NP'} as Fiche;

  }

  /*rempTab() {
    for (let i = 0; i <= 10; i++) {
      this.tab.push(i);
    }
  }

  rempTab2() {
    for (let i = 0; i <= 5; i++) {
      this.tab2.push(i);
    }



  }*/

  saveFamille(){
    return this.fiche1;
  }
}
