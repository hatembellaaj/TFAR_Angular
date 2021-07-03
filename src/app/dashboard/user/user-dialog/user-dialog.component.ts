
import { User } from './../../../../model/user';
import { Component, DoCheck, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartementService } from 'src/app/services/departement.service';
import { OrganismeService } from 'src/app/services/organisme.service';
import { Observable } from 'rxjs';
import { Departement } from 'src/model/departement';
import { Organisme } from 'src/model/organisme';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit,DoCheck {

  gouvernorat: any;

  organismes$!: Observable<Organisme[]>;
  departements$!: Observable<Departement[]>;

  selectedDepartement: any;
  selectedOrganisme: any;

  //selectedgv:any;

  constructor(public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User, private organismeService: OrganismeService, private departementService: DepartementService) { }
  ngDoCheck(): void {
    console.log(this.data,"mokhtar");
  }

  ngOnInit(): void {
    this.gouvernorat = ['Ariana', 'Beja', 'BenArous', 'Bizerte', 'Gabes', 'Gafsa', 'Jendouba'
      , 'Kairouan', 'Kasserine', 'Kebili', 'LeKef', 'Mahdia', 'LaManouba',
      'Medenine', 'Monastir', 'Nabeul', 'Sfax', 'SidiBouzid', 'Siliana', 'Sousse', 'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan', 'NP'];
    //this.selectedgv=this.gouvernorat[this.gouvernorat.length-1];

    this.getAllOrganismes();
    this.getAllDepartements();

    this.organismeService.getAllOrganismes().subscribe(data => this.selectedOrganisme = data[0].nom);

    this.departementService.getAllDepartements().subscribe(data => this.selectedDepartement = data[0].nom);
  }

  onNoClick() {

    this.dialogRef.close();
    console.log("cancel");

  }

  getAllOrganismes() {
    this.organismes$ = this.organismeService.getAllOrganismes().pipe(map(data => {
      console.log(data); return data
    }));
  }

  getAllDepartements() {
    this.departements$ = this.departementService.getAllDepartements().pipe(map(data => {
      console.log(data); return data
    }));
  }

  /*fctCodeOrg(a: Organisme)  {
    return JSON.stringify(a);
    //return a;




  }


  fctCodeDep(a: Departement)  {
    return JSON.stringify(a);
    //return a;

  }*/


  todo(data: any){
    console.log(data,"azerty");
  }






}
