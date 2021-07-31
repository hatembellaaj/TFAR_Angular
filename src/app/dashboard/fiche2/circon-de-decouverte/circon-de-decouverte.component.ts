import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Fiche } from 'src/model/fiche';


@Component({
  selector: 'fiche2-circon-de-decouverte',
  templateUrl: './circon-de-decouverte.component.html',
  styleUrls: ['./circon-de-decouverte.component.css']
})
export class CirconDeDecouverteComponent implements OnInit {

  fiche2!: Fiche;
  tabenum1 = ['Oui', 'Non', 'NP', 'moin1'];
  typeCancer: any;

  //autres:any;


  constructor() {
    this.fiche2 = {
      syndromeAnemique: 'NP', syndromeHem: 'NP', syndromeInf: 'NP', decouverteFort: 'NP', enqueteFam: 'NP', typeCancer: '', cancer: 'NP'
    } as Fiche;
  }

  ngOnInit(): void {
  }

  saveCirDecInformations(){
    return this.fiche2;
  }

}
