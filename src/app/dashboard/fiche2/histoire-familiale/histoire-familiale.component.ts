import { Fiche } from './../../../../model/fiche';

import { Component, OnInit, DoCheck, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'fiche2-histoire-familiale',
  templateUrl: './histoire-familiale.component.html',
  styleUrls: ['./histoire-familiale.component.css']
})
export class HistoireFamilialeComponent implements OnInit, DoCheck {


  fiche1!: Fiche;
  @Output() fiche1Change: EventEmitter<Fiche> = new EventEmitter<Fiche>();


  tab: number[] = [];

  tab2: number[] = [];



  dConsanguiniteParent = ['NP', 'Absence', 'Endogamme', 'Lointaine', 'Double cousins germains (2 eme degre)', 'Cousins germains(3 eme degre)'];


  public onChangeFiche1() {
    this.fiche1Change.emit(this.fiche1);
  }

  constructor() {
    this.fiche1 = { degConsang: 'NP' } as Fiche;
  }


  ngDoCheck(): void {


  }

  ngOnInit(): void {
    this.rempTab();
    this.rempTab2();


  }

  rempTab() {
    for (let i = 0; i <= 10; i++) {
      this.tab.push(i);
    }
  }

  rempTab2() {
    for (let i = 0; i <= 5; i++) {
      this.tab2.push(i);
    }



  }
}
