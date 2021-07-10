import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fiche2-score-clinique',
  templateUrl: './score-clinique.component.html',
  styleUrls: ['./score-clinique.component.css']
})
export class ScoreCliniqueComponent implements OnInit {

  scoreClinique:any;

  scoreEBMT:any;

  score=['Limite', 'Extensif', 'Moin1'];

  score1='Limite';

  constructor() { }

  ngOnInit(): void {
  }

}

