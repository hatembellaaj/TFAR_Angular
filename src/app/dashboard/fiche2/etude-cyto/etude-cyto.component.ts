import { Component,Input, OnInit,DoCheck, OnChanges, SimpleChanges} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LaboratoireService } from 'src/app/services/laboratoire.service';
import { Cytogenetique } from 'src/model/cytogenetique';
import { Laboratoire } from 'src/model/laboratoire';


@Component({
  selector: 'fiche2-etude-cyto',
  templateUrl: './etude-cyto.component.html',
  styleUrls: ['./etude-cyto.component.css']
})
export class EtudeCytoComponent implements OnInit,DoCheck,OnChanges {

  @Input('etudeCytoUpd') etudeCytoUpd: Cytogenetique | undefined;

  cytogenetique!: Cytogenetique ;

  laboratoires$!: Observable<Laboratoire[]>;

  lymphoTab = ['Faite', 'NonFaite'];

  agentPortantTab = ['Non', 'MMC', 'DEB'];

  instabiliteTab = ['Oui', 'Non'];

  irTab = ['Oui', 'Non'];

  date1 = new FormControl(new Date());
  date2 = new FormControl(new Date());


  constructor(private laboratoireService: LaboratoireService) {
    this.cytogenetique={dateSang:this.date1.value,
      dateMoelle : this.date2.value,lymphocytes : 'NonFaite',
      agentPortant : 'Non',instabilite : 'Non',
      instabilitePourcentage : 0,ir : 'Non',irPourcentage : 0,
      moelle : 'NonFaite',resultatMoelle : ''}
   }

  ngDoCheck(): void {


  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    const derniereValeur=changes.etudeCytoUpd.previousValue;
    const currentValue=changes.etudeCytoUpd.currentValue;

    if (derniereValeur==undefined  && currentValue!=undefined){

     this.cytogenetique=currentValue;

    }}

  ngOnInit(): void {

    this.getAlllaboratoires();

    this.laboratoireService.getAllLaboratoires().subscribe(data => {
      console.log(data, "sssssssssssss"); this.cytogenetique.idLaboratoire = data[0].id
    });
  }





  saveCytoInformations(){
    return this.cytogenetique;
  }

  getAlllaboratoires() {

    this.laboratoires$ = this.laboratoireService.getAllLaboratoires().pipe(map(data => {
      console.log(data); return data
    }));

  }

}
