import { Component, EventEmitter, Input, OnInit, Output, DoCheck } from '@angular/core';
import { Fiche } from 'src/model/fiche';

@Component({
  selector: 'fiche2-biologie-moleculaire',
  templateUrl: './biologie-moleculaire.component.html',
  styleUrls: ['./biologie-moleculaire.component.css']
})
export class BiologieMoleculaireComponent implements OnInit,DoCheck {

  @Input('BiologieMole') BiologieMole: Fiche | undefined;

  fiche5!: Fiche;

  tabenum1 = ['Oui', 'Non', 'NP', 'moin1'];

  tabenum7 = ['Positif', 'Negatif', 'Moin1'];

  constructor() {
    this.fiche5 = { ubiquitination: 'NP', resUbiquitination: 'Moin1' } as Fiche;
  }
  ngDoCheck(): void {
    if (this.BiologieMole!=undefined){

      this.fiche5=this.BiologieMole;

    }
  }

  ngOnInit(): void {
  }


  saveBioMolecInformations(){
    return this.fiche5;
  }

}
