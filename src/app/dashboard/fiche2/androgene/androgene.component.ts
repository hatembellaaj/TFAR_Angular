import { Component, EventEmitter, Input, OnInit, Output, DoCheck } from '@angular/core';
import { Androgene } from 'src/model/androgene';

@Component({
  selector: 'fiche2-androgene',
  templateUrl: './androgene.component.html',
  styleUrls: ['./androgene.component.css']
})
export class AndrogeneComponent implements OnInit,DoCheck {

  @Input('androgeneUpd') androgeneUpd: Androgene | undefined;

  androgene!: Androgene;

  mois = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];

  response = ['NP', 'RC', 'RP', 'RM', 'Echec'];

  constructor() {
    this.androgene = { mois: 'Janvier', reponse: 'NP' } as Androgene;
  }
  ngDoCheck(): void {
    if (this.androgeneUpd!=undefined){

      this.androgene=this.androgeneUpd;

    }
  }

  ngOnInit(): void {
  }


  saveAndrogeneInformations() {
    return this.androgene;
  }

}
