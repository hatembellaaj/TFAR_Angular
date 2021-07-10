import { Laboratoire } from './../../../../model/laboratoire';
import { Observable } from 'rxjs';
import { Component, OnInit, DoCheck } from '@angular/core';
import { LaboratoireService } from 'src/app/services/laboratoire.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'fiche2-congelation-cell',
  templateUrl: './congelation-cell.component.html',
  styleUrls: ['./congelation-cell.component.css']
})
export class CongelationCellComponent implements OnInit,DoCheck {

  tabenum2=['Faite', 'Nonfaite', 'Moin1', 'NP'];

  enum22='NP';

  //lab=['Pasteur','Sousse','Sfax',''];

  lab1='';

  typePre:any;

  laboratoires$!:Observable<Laboratoire[]>;


  constructor(private laboratoireService :LaboratoireService) { }
  ngDoCheck(): void {

    if (this.enum22!='Faite'){

      this.lab1='';
      this.typePre='';


    }

  }

  ngOnInit(): void {
    this.getAlllaboratoires();
  }

  getAlllaboratoires(){

    this.laboratoires$ = this.laboratoireService.getAllLaboratoires().pipe( map ( data=>{
      console.log(data); return data}));

  }

}
