import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



import {MatTableDataSource} from '@angular/material/table';
import { ServiceService } from 'src/app/services/service.service';
import { Service } from 'src/model/service';
import { ServiceDialogComponent } from './serviceDialog/service-dialog.component';
import { ServiceDtDialogComponent } from './serviceDtDialog/service-dt-dialog.component';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit,AfterViewInit {



  dataSource!: MatTableDataSource<Service> ;


  displayedColumns: string[] = ['Code_Service', 'Nom_Service','detail','update','delete'];

  searchKey!: string;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  Code_Service!:number;
  Nom_Service!:string;
  vvv:any;

  constructor(private dialog:MatDialog,private serviceService :ServiceService ) { }
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
    this.dataSource= new MatTableDataSource<Service>(this.serviceService.getAllServices() );
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
    dialogConfig.data={Code_Service: this.Code_Service, Nom_Service: this.Nom_Service};
    const dialogRef=this.dialog.open(ServiceDialogComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result!=undefined){

        console.log(result);


      //this.dataSource.data.push(result);

      this.serviceService.saveService(result);

      console.log(this.dataSource.data);
      this.paginator1();
      this.sort1();
      }




    });



  }

  onDelete(service:Service){
    this.serviceService.deleteService(service);
    console.log("ondelete!!!!")
    console.log(service,"aaaaaa");
    this.getData();
    this.paginator1();
    this.sort1();
  }


  onDetails(service:Service){

    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    dialogConfig.data={Code_Service: service.Code_Service, Nom_Service: service.Nom_Service};
    console.log("["+service.Code_Service+", "+service.Nom_Service+"]");
    const dialogRef=this.dialog.open(ServiceDtDialogComponent,dialogConfig);

  }


  onUpdate(service:Service){

    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    dialogConfig.data={Code_Service: service.Code_Service, Nom_Service: service.Nom_Service};
    console.log("["+service.Code_Service+", "+service.Nom_Service+"]");
    const dialogRef=this.dialog.open(ServiceDialogComponent,dialogConfig);


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed update');
      if (result==undefined){

        console.log("vous avez clicker sur cancel");
      }
      else if (result.Code_Service==service.Code_Service){

        console.log("rrrrrrrrrrrrrrrrrrrrrrrrr")
        console.log(result.Code_Service);
        console.log("update sucsess");
        console.log(service.Code_Service)
        this.serviceService.updateService(result);
        this.paginator1();
        this.sort1();

      }
      else {

        console.log("il ne faut pas changer le code service");

      }





    });


  }


}
