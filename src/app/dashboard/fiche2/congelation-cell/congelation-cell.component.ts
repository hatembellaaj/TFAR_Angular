import { Laboratoire } from './../../../../model/laboratoire';
import { Observable } from 'rxjs';
import { Component, OnInit, DoCheck, EventEmitter } from '@angular/core';
import { LaboratoireService } from 'src/app/services/laboratoire.service';
import { map } from 'rxjs/operators';
import { Fiche } from 'src/model/fiche';
import { Output } from '@angular/core';

@Component({
  selector: 'fiche2-congelation-cell',
  templateUrl: './congelation-cell.component.html',
  styleUrls: ['./congelation-cell.component.css']
})
export class CongelationCellComponent implements OnInit, DoCheck {

  fiche6!: Fiche;
  @Output() fiche6Change: EventEmitter<Fiche> = new EventEmitter<Fiche>();

  tabenum2 = ['Faite', 'Nonfaite', 'Moin1', 'NP'];

  enum22 = 'NP';

  //lab=['Pasteur','Sousse','Sfax',''];

  lab1 = '';

  typePre: any;

  laboratoires$!: Observable<Laboratoire[]>;


  constructor(private laboratoireService: LaboratoireService) {
    this.fiche6 = { congelationCellule: 'NP' } as Fiche;
  }

  public onChangeFiche6() {
    this.fiche6Change.emit(this.fiche6);
  }


  ngDoCheck(): void {

    if (this.fiche6.congelationCellule != 'Faite') {

      this.fiche6.labo = '';
      this.fiche6.typePrelevement = '';


    }

  }

  ngOnInit(): void {
    this.getAlllaboratoires();
  }

  getAlllaboratoires() {

    this.laboratoires$ = this.laboratoireService.getAllLaboratoires().pipe(map(data => {
      console.log(data); return data
    }));

  }

}
