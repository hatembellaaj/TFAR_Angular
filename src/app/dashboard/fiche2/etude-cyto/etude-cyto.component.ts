import { Component, EventEmitter, Input, OnInit, Output, DoCheck, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EtudeCytoService } from 'src/app/services/etude-cyto.service';
import { Cytogenetique } from 'src/model/cytogenetique';
import { EtudeCytoDialogComponent } from './etude-cyto-dialog/etude-cyto-dialog.component';

@Component({
  selector: 'fiche2-etude-cyto',
  templateUrl: './etude-cyto.component.html',
  styleUrls: ['./etude-cyto.component.css']
})
export class EtudeCytoComponent implements OnInit,DoCheck {

  @Input('etudeCytoUpd') etudeCytoUpd: Cytogenetique | undefined;

  cytogenetique1!: Cytogenetique ;

  bool=false;

  constructor(private dialog:MatDialog,private etudeCytoService :EtudeCytoService) { }
  ngDoCheck(): void {


  }

  ngOnInit(): void {
  }



  onCreate(){
    this.bool=true;
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    //dialogConfig.data = { } as Cytogenetique;
    dialogConfig.data = this.etudeCytoUpd!=undefined?this.etudeCytoUpd:{} as Cytogenetique;
    console.log("etude cyto update",this.etudeCytoUpd)
    this.etudeCytoService.sendCytogenetique(this.etudeCytoUpd)
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
