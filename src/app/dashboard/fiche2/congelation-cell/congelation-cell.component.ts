import { Laboratoire } from './../../../../model/laboratoire';
import { Observable } from 'rxjs';
import { Component, OnInit, DoCheck, EventEmitter, Input } from '@angular/core';
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

  @Input('CongelationCellUpd') CongelationCellUpd: Fiche | undefined;

  fiche6!: Fiche;

  tabenum2 = ['Faite', 'Nonfaite', 'Moin1', 'NP'];

  enum22 = 'NP';

  lab=['Pasteur','Sousse','Sfax'];

  //laboratoires$!: Observable<Laboratoire[]>;


  constructor(private laboratoireService: LaboratoireService) {
    this.fiche6 = { congelationCellule: 'NP' } as Fiche;
  }



  ngDoCheck(): void {

    if (this.CongelationCellUpd!=undefined){

      this.fiche6=this.CongelationCellUpd;

    }

    if (this.fiche6.congelationCellule != 'Faite') {

      this.fiche6.typePrelevement = '';
      this.fiche6.labo='Sfax';


    }

  }

  ngOnInit(): void {
    //this.getAlllaboratoires();
  }

 /* getAlllaboratoires() {

    this.laboratoires$ = this.laboratoireService.getAllLaboratoires().pipe(map(data => {
      this.lab1=data[0].nom
      console.log(data); return data
    }));

  }*/

  saveCongCellInformations(){
    return this.fiche6;
  }

}
