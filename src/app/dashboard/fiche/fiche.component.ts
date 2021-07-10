import { Fiche } from './../../../model/fiche';
import {  Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FicheService } from 'src/app/services/fiche.service';
import { Departement } from 'src/model/departement';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']
})
export class FicheComponent implements OnInit {

  fiches$!:Observable<Fiche[]>;
  dataSource!: MatTableDataSource<Fiche> ;
  //displayedColumns: string[] = ['code', 'num dossier','nom','prenom','date diagnostique','date d enregistrement','organisme','departement','impression','detail','update','delete'];

  displayedColumns: string[] = ['code','num_dossier','nom','prenom','date_diagnostic','date_enregistrement','organisme','departement','detail','update','delete'];

  searchKey!: string;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  code!:number;
  nom!:string;
  bool:boolean=false;


  constructor(private router:Router,private ficheService :FicheService,private _snackBar: MatSnackBar) { }



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
    this.getAlldepartements();
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
    this.ficheService.getAllFiches().subscribe(data => {
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

    this.router.navigate(["dashboard/fiche2"]);



  }

  onDelete(fiche:Fiche){

  }


  onDetails(fiche:Fiche){

  }


  onUpdate(departement:Departement){

  }

  getAlldepartements(){

    this.fiches$ = this.ficheService.getAllFiches().pipe( map ( data=>{
      console.log(data); return data}));

  }





}
