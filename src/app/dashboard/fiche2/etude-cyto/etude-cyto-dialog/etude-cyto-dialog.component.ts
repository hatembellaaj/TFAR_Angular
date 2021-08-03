import { AgentPortant } from './../../../../enumeration/agentPortant';
import { Component, OnInit, Inject } from '@angular/core';
import { Cytogenetique } from 'src/model/cytogenetique';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Laboratoire } from 'src/model/laboratoire';
import { Observable } from 'rxjs';
import { LaboratoireService } from 'src/app/services/laboratoire.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-etude-cyto-dialog',
  templateUrl: './etude-cyto-dialog.component.html',
  styleUrls: ['./etude-cyto-dialog.component.css']
})
export class EtudeCytoDialogComponent implements OnInit {

  laboratoires$!: Observable<Laboratoire[]>;

  lymphoTab = ['Faite', 'NonFaite'];

  agentPortantTab = ['Non', 'MMC', 'DEB'];

  instabiliteTab = ['Oui', 'Non'];

  irTab=['Oui', 'Non'];

  constructor(public dialogRef: MatDialogRef<EtudeCytoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public cytogenetique: Cytogenetique, private laboratoireService: LaboratoireService) { }


  ngOnInit(): void {
    this.getAlllaboratoires();

    this.laboratoireService.getAllLaboratoires().subscribe(data => {
      console.log(data,"sssssssssssss");   this.cytogenetique.idLaboratoire= data[0].id});
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
