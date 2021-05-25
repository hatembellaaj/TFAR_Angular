import { AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServiceService } from 'src/app/services/service.service';
import { Service } from 'src/model/service';
import { ServiceDialogComponent } from './serviceDialog/service-dialog.component';
import { ServiceDtDialogComponent } from './serviceDtDialog/service-dt-dialog.component';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit,AfterViewInit,DoCheck {

  services$!:Observable<Service[]>;
  dataSource!: MatTableDataSource<Service> ;
  displayedColumns: string[] = ['code_service', 'nom_service','detail','update','delete'];
  searchKey!: string;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  code_service!:number;
  nom_service!:string;
  bool:boolean=false;


  constructor(private dialog:MatDialog,private serviceService :ServiceService,private _snackBar: MatSnackBar) { }



  ngOnInit(): void {

    this.getData();

  }

  ngDoCheck(): void {
    if (this.bool==true){
      this.getData();
      this.bool=false;

    }
  }

  ngAfterViewInit(): void {
    this.sort1();
    this.paginator1();
    this.getAllservices();
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
    this.serviceService.getAllServices().subscribe(data => {
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
    dialogConfig.data = {code_service: this.code_service, nom_service: this.nom_service};
    const dialogRef =this.dialog.open(ServiceDialogComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result != undefined){

        console.log(result);
        console.log(result.code_service);
        console.log(result.nom_service);

      this.serviceService.saveService(result).subscribe(
        res =>{
            console.log(res);
            //location.reload();
            this.bool=true;

        },
        err => {
            console.log(err.message);
        }
    );
      }
     });

  }

  onDelete(service:Service){

    this.serviceService.deleteService(service).subscribe(
      res =>{
          console.log(res);

      },
      err => {
          console.log(err.message);
          //location.reload();
          this.bool=true;

      }
  );
    console.log("ondelete!!!!")
    console.log(service,"aaaaaa");
  }


  onDetails(service:Service){

    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = {code_service: service.code_service, nom_service: service.nom_service};
    console.log("["+service.code_service+", "+service.nom_service + "]");
    const dialogRef =this.dialog.open(ServiceDtDialogComponent,dialogConfig);

  }


  onUpdate(service:Service){

    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = {code_service: service.code_service, nom_service: service.nom_service};;
    console.log("["+service.code_service+", "+service.nom_service + "]");
    const dialogRef =this.dialog.open(ServiceDialogComponent,dialogConfig);


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed update');
      if (result == undefined){

        console.log("vous avez clicker sur cancel");
      }
      else if (result.code_service == service.code_service){

        console.log("rrrrrrrrrrrrrrrrrrrrrrrrr")
        console.log(result.code_service);
        console.log("update sucsess");
        console.log(service.code_service)
        this.serviceService.updateService(result).subscribe(
          res =>{
              console.log(res);
              //location.reload();
              this.bool=true;

          },
          err => {
              console.log(err.message);

          }
      );

      }
      else {

        console.log("il ne faut pas changer le code service");

        this.openSnackBar("You  mustn't change the code service", "Update fail",2800);

      }
    });

  }

  getAllservices(){

    this.services$ = this.serviceService.getAllServices().pipe( map ( data=>{
      console.log(data); return data}));

  }





}
