import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fiche2-biologie-moleculaire',
  templateUrl: './biologie-moleculaire.component.html',
  styleUrls: ['./biologie-moleculaire.component.css']
})
export class BiologieMoleculaireComponent implements OnInit {

  tabenum1=['Oui', 'Non', 'NP', 'moin1'];

  tabenum7=['Positif', 'Negatif', 'Moin1'];

  enum11='NP';

  enum77='Positif';

  groupeComp:any;

  mutationGene:any;

  constructor() { }

  ngOnInit(): void {
  }

}
