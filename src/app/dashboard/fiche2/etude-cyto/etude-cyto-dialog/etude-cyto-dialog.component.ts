
import { Component, OnInit, Inject, Input, DoCheck } from '@angular/core';
import { Cytogenetique } from 'src/model/cytogenetique';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Laboratoire } from 'src/model/laboratoire';
import { Observable } from 'rxjs';
import { LaboratoireService } from 'src/app/services/laboratoire.service';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { EtudeCytoService } from 'src/app/services/etude-cyto.service';

@Component({
  selector: 'app-etude-cyto-dialog',
  templateUrl: './etude-cyto-dialog.component.html',
  styleUrls: ['./etude-cyto-dialog.component.css']
})
export class EtudeCytoDialogComponent implements OnInit,DoCheck {

  var!:Cytogenetique | undefined;



  laboratoires$!: Observable<Laboratoire[]>;

  lymphoTab = ['Faite', 'NonFaite'];

  agentPortantTab = ['Non', 'MMC', 'DEB'];

  instabiliteTab = ['Oui', 'Non'];

  irTab = ['Oui', 'Non'];

  date1 = new FormControl(new Date());
  date2 = new FormControl(new Date());

  constructor(public dialogRef: MatDialogRef<EtudeCytoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public cytogenetique: Cytogenetique, private laboratoireService: LaboratoireService,
    private etudeCytoService :EtudeCytoService) {
     // this.etudeCytoService.receivedCytogenetique().subscribe(data=>{this.var=data; console.log('rrrttygtgt',data)});

    if (this.cytogenetique = {} as Cytogenetique) {

      this.cytogenetique.dateSang = this.date1.value;
      this.cytogenetique.dateMoelle = this.date2.value;
      this.cytogenetique.lymphocytes = 'NonFaite';
      this.cytogenetique.agentPortant = 'Non';
      this.cytogenetique.instabilite = 'Non';
      this.cytogenetique.instabilitePourcentage = 0;
      this.cytogenetique.ir = 'Non';
      this.cytogenetique.irPourcentage = 0;
      this.cytogenetique.moelle = 'NonFaite';
      this.cytogenetique.resultatMoelle = '';

    }




  }
  ngDoCheck(): void {
    /*if (this.var!=undefined){

      this.cytogenetique=this.var;

    }*/


  }


  ngOnInit(): void {
    this.getAlllaboratoires();

    this.laboratoireService.getAllLaboratoires().subscribe(data => {
      console.log(data, "sssssssssssss"); this.cytogenetique.idLaboratoire = data[0].id
    });
  }

  onNoClick() {

    this.dialogRef.close();
    console.log("cancel");

  }

  getAlllaboratoires() {

    this.laboratoires$ = this.laboratoireService.getAllLaboratoires().pipe(map(data => {
      console.log(data); return data
    }));

  }

}
