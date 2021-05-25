import { Hopital } from './../../../model/hopital';
import { AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HopitalService } from 'src/app/services/hopital.service';
import { HopitalDialogComponent } from './hopitalDialog/hopital-dialog.component';
import { HopitalDtDialogComponent } from './hopitalDtDialog/hopital-dt-dialog.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-hopital',
  templateUrl: './hopital.component.html',
  styleUrls: ['./hopital.component.css']
})
export class HopitalComponent implements OnInit,AfterViewInit,DoCheck  {


  hopitaux$!:Observable<Hopital[]>;
  dataSource!: MatTableDataSource<Hopital> ;
  displayedColumns: string[] = ['code_hopitale', 'nom_Hopitale','detail','update','delete'];
  searchKey!: string;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  code_hopitale!:number;
  nom_Hopitale!:string;
  bool :boolean=false;


  constructor(private dialog:MatDialog,private hopitalService :HopitalService,private _snackBar: MatSnackBar) { }


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
    this.getAllhopitaux();
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
    this.hopitalService.getAllHopitals().subscribe(data => {
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
    dialogConfig.data = {code_hopitale: this.code_hopitale, nom_Hopitale: this.nom_Hopitale};
    const dialogRef =this.dialog.open(HopitalDialogComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result != undefined){

        console.log(result);
        console.log(result.code_hopitale);
        console.log(result.nom_Hopitale);

      this.hopitalService.saveHopital(result).subscribe(
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

  onDelete(hopital:Hopital){

    this.hopitalService.deleteHopital(hopital).subscribe(
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
    console.log(hopital,"aaaaaa");
  }


  onDetails(hopital:Hopital){

    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = {code_hopitale: hopital.code_hopitale, nom_Hopitale: hopital.nom_Hopitale};
    console.log("["+hopital.code_hopitale+", "+hopital.nom_Hopitale + "]");
    const dialogRef =this.dialog.open(HopitalDtDialogComponent,dialogConfig);

  }


  onUpdate(hopital:Hopital){

    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = {code_hopitale: hopital.code_hopitale, nom_Hopitale: hopital.nom_Hopitale};;
    console.log("["+hopital.code_hopitale+", "+hopital.nom_Hopitale + "]");
    const dialogRef =this.dialog.open(HopitalDialogComponent,dialogConfig);


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed update');
      if (result == undefined){

        console.log("vous avez clicker sur cancel");
      }
      else if (result.code_hopitale == hopital.code_hopitale){

        console.log("rrrrrrrrrrrrrrrrrrrrrrrrr")
        console.log(result.code_Hopitale);
        console.log("update sucsess");
        console.log(hopital.code_hopitale)
        this.hopitalService.updateHopital(result).subscribe(
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

        console.log("il ne faut pas changer le code hopital");

        this.openSnackBar("You  mustn't change the code hopitale", "Update fail",2800);

      }
    });

  }

  getAllhopitaux(){

    this.hopitaux$ = this.hopitalService.getAllHopitals().pipe(map(data=>{
      console.log(data); return data}));

  }

}
