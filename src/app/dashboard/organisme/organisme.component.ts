import { Organisme } from '../../../model/organisme';
import { AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrganismeService } from '../../services/organisme.service';
import { OrganismeDialogComponent } from './organisme-dialog/organisme-dialog.component';
import { OrganismeDtDialogComponent } from './organisme-dt-dialog/organisme-dt-dialog.component';
import { OrganismeType } from 'src/app/enumeration/OrganismeType';

@Component({
  selector: 'app-organisme',
  templateUrl: './organisme.component.html',
  styleUrls: ['./organisme.component.css']
})
export class OrganismeComponent implements OnInit,AfterViewInit,DoCheck {


  organismes$!:Observable<Organisme[]>;
  dataSource!: MatTableDataSource<Organisme> ;
  displayedColumns: string[] = ['code', 'nom','adresse','tel','contact','email','type','detail','update','delete'];
  searchKey!: string;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  code!:number;
  nom!:string;
  adresse!:string;
  tel!:string;
  contact!:string;
  email!:string;
  type!:OrganismeType;
  bool :boolean=false;


  constructor(private dialog:MatDialog,private organismeService :OrganismeService,private _snackBar: MatSnackBar) { }


  ngOnInit(): void {

    this.getData();

  }

  ngDoCheck() {

    if (this.bool==true){

      this.getData();
      this.bool=false;

    }
  }

  ngAfterViewInit(): void {
    this.sort1();
    this.paginator1();
    this.getAllorganismes();
  }

  openSnackBar(message: string, action: string,duration:number) {
    this._snackBar.open(message, action,{duration:duration});
  }

  sort1(){
    if (this.dataSource!=undefined){
      this.dataSource.sort = this.sort;
    }
  }

  paginator1(){
    if (this.dataSource!=undefined){
      this.dataSource.paginator = this.paginator;

    }

  }



  getData(){
    this.organismeService.getAllOrganismes().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.sort1();
      this.paginator1();

    });
  }





  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate(){
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = {code : this.code, nom : this.nom ,adresse : this.adresse,tel : this.tel,contact : this.contact,email : this.email,type:this.type};
    const dialogRef =this.dialog.open(OrganismeDialogComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result != undefined){

        console.log(result);
        console.log(result.code);
        console.log(result.nom);

      this.organismeService.saveOrganisme(result).subscribe(
        res =>{
            console.log(res);
            this.bool=true;



        },
        err => {
            console.log(err.message);
        }
    );
      }
     });

  }

  onDelete(organisme:Organisme){

    this.organismeService.deleteOrganisme(organisme).subscribe(
      res =>{
          console.log(res);

      },
      err => {
          console.log(err.message);
          this.bool=true;
          console.log(err.status)
          if (err.status==500){
            this.openSnackBar("You must delete the associated users before delete", "Delete fail",2800);

          }


      }
  );
    console.log("ondelete!!!!")
    console.log(organisme,"aaaaaa");
  }


  onDetails(organisme:Organisme){

    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = {code : organisme.code, nom : organisme.nom ,adresse : organisme.adresse,tel : organisme.tel,contact : organisme.contact,email : organisme.email,type:organisme.type};
    console.log("["+organisme.code+", "+organisme.nom + "]");
    const dialogRef =this.dialog.open(OrganismeDtDialogComponent,dialogConfig);

  }


  onUpdate(organisme:Organisme){

    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = {code : organisme.code, nom : organisme.nom ,adresse : organisme.adresse,tel : organisme.tel,contact : organisme.contact,email : organisme.email,type:organisme.type};
    console.log("["+organisme.code+", "+organisme.nom + "]");
    const dialogRef =this.dialog.open(OrganismeDialogComponent,dialogConfig);


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed update');
      if (result == undefined){

        console.log("vous avez clicker sur cancel");
      }
      else if (result.code == organisme.code){

        console.log("rrrrrrrrrrrrrrrrrrrrrrrrr")
        console.log(result.code);
        console.log("update sucsess");
        console.log(organisme.code)
        this.organismeService.updateOrganisme(result).subscribe(
          res =>{
              console.log(res);
              this.bool=true;

          },
          err => {
              console.log(err.message);

          }
      );

      }
      /*else {

        console.log("il ne faut pas changer le code organisme");

        this.openSnackBar("You  mustn't change the code organisme", "Update fail",2800);

      }*/
    });

  }

  getAllorganismes(){

    this.organismes$ = this.organismeService.getAllOrganismes().pipe(map(data=>{
      console.log(data); return data}));

  }

}

