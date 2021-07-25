import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Fiche } from 'src/model/fiche';

@Component({
  selector: 'fiche2-biologie-moleculaire',
  templateUrl: './biologie-moleculaire.component.html',
  styleUrls: ['./biologie-moleculaire.component.css']
})
export class BiologieMoleculaireComponent implements OnInit {

  fiche5!: Fiche;
  @Output() fiche5Change: EventEmitter<Fiche> = new EventEmitter<Fiche>();

  tabenum1 = ['Oui', 'Non', 'NP', 'moin1'];

  tabenum7 = ['Positif', 'Negatif', 'Moin1'];

  constructor() {
    this.fiche5 = { ubiquitination: 'NP', resUbiquitination: 'Moin1' } as Fiche;
  }

  ngOnInit(): void {
  }

  public onChangeFiche5() {
    this.fiche5Change.emit(this.fiche5);
  }

}
