import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Cytogenetique } from 'src/model/cytogenetique';
import { EtudeCytoDialogComponent } from './etude-cyto-dialog/etude-cyto-dialog.component';

@Component({
  selector: 'fiche2-etude-cyto',
  templateUrl: './etude-cyto.component.html',
  styleUrls: ['./etude-cyto.component.css']
})
export class EtudeCytoComponent implements OnInit {

  cytogenetique1!: Cytogenetique;

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }



  onCreate(){
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { } as Cytogenetique;
    const dialogRef =this.dialog.open(EtudeCytoDialogComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result != undefined){

        this.cytogenetique1=result;

        console.log(result);



      }
     });

  }

  saveCytoInformations(){
    return this.cytogenetique1;
  }

}
