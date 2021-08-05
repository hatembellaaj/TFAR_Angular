import { EventEmitter, Output, DoCheck, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Fiche } from 'src/model/fiche';

@Component({
  selector: 'fiche2-score-clinique',
  templateUrl: './score-clinique.component.html',
  styleUrls: ['./score-clinique.component.css']
})
export class ScoreCliniqueComponent implements OnInit,DoCheck {

  @Input('ScoreCliniqueUpd') ScoreCliniqueUpd: Fiche | undefined;

  fiche7!: Fiche;

  score = ['Limite', 'Extensif', 'Moin1'];

  constructor() {
    this.fiche7 = { score: 'Moin1', scoreClinique: 0, scoreEBMT: 0 } as Fiche;
  }
  ngDoCheck(): void {

    if (this.ScoreCliniqueUpd!=undefined){

      this.fiche7=this.ScoreCliniqueUpd;

    }

  }

  ngOnInit(): void {
  }

  saveScoreCliInformations(){
    return this.fiche7;
  }

}

