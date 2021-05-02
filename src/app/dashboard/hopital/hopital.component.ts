import { Hopital } from './../../../model/hopital';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HopitalService } from 'src/app/services/hopital.service';

import { HopitalDialogComponent } from './hopitalDialog/hopital-dialog.component';
import { HopitalDtDialogComponent } from './hopitalDtDialog/hopital-dt-dialog.component';

@Component({
  selector: 'app-hopital',
  templateUrl: './hopital.component.html',
  styleUrls: ['./hopital.component.css']
})
export class HopitalComponent implements OnInit,AfterViewInit  {



  dataSource!: MatTableDataSource<Hopital> ;


  displayedColumns: string[] = ['Code_hopitale', 'Nom_Hopitale','detail','update','delete'];

  searchKey!: string;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  Code_hopitale!:number;
  Nom_Hopitale!:string;
  vvv:any;

  constructor(private dialog:MatDialog,private hopitalService :HopitalService ) { }
  ngAfterViewInit(): void {
    this.sort1();
    this.paginator1();
  }

  sort1(){
    this.dataSource.sort = this.sort;
  }

  paginator1(){
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {

    this.getData();

  }

  getData(){
    this.dataSource= new MatTableDataSource<Hopital>(this.hopitalService.getAllHopitals() );
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    dialogConfig.data={Code_Hopitale: this.Code_hopitale, Nom_Hopitale: this.Nom_Hopitale};
    const dialogRef=this.dialog.open(HopitalDialogComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result!=undefined){

        console.log(result);


      //this.dataSource.data.push(result);

      this.hopitalService.saveHopital(result);

      console.log(this.dataSource.data);
      this.paginator1();
      this.sort1();
      }




    });



  }

  onDelete(hopital:Hopital){
    this.hopitalService.deleteHopital(hopital);
    console.log("ondelete!!!!")
    console.log(hopital,"aaaaaa");
    this.getData();
    this.paginator1();
    this.sort1();
  }


  onDetails(hopital:Hopital){

    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    dialogConfig.data={Code_hopitale: hopital.Code_hopitale, Nom_Hopitale: hopital.Nom_Hopitale};
    console.log("["+hopital.Code_hopitale+", "+hopital.Nom_Hopitale+"]");
    const dialogRef=this.dialog.open(HopitalDtDialogComponent,dialogConfig);

  }


  onUpdate(hopital:Hopital){

    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    dialogConfig.data={Code_hopitale: hopital.Code_hopitale, Nom_Hopitale: hopital.Nom_Hopitale};;
    console.log("["+hopital.Code_hopitale+", "+hopital.Nom_Hopitale+"]");
    const dialogRef=this.dialog.open(HopitalDialogComponent,dialogConfig);


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed update');
      if (result==undefined){

        console.log("vous avez clicker sur cancel");
      }
      else if (result.Code_hopitale==hopital.Code_hopitale){

        console.log("rrrrrrrrrrrrrrrrrrrrrrrrr")
        console.log(result.Code_Hopitale);
        console.log("update sucsess");
        console.log(hopital.Code_hopitale)
        this.hopitalService.updateHopital(result);
        this.paginator1();
        this.sort1();

      }
      else {

        console.log("il ne faut pas changer le code hopital");

      }





    });


  }


}
