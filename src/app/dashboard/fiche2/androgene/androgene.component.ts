import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Androgene } from 'src/model/androgene';

@Component({
  selector: 'fiche2-androgene',
  templateUrl: './androgene.component.html',
  styleUrls: ['./androgene.component.css']
})
export class AndrogeneComponent implements OnInit {

  androgene!: Androgene;
  @Output() androgeneChange: EventEmitter<Androgene> = new EventEmitter<Androgene>();

  mois = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];

  response = ['NP', 'RC', 'RP', 'RM', 'Echec'];

  constructor() {
    this.androgene = { mois: 'Janvier', reponse: 'NP' } as Androgene;
  }

  ngOnInit(): void {
  }

  public onChangeAndrogene() {
    this.androgeneChange.emit(this.androgene);
  }

}
