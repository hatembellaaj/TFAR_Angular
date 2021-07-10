import { Departement } from '../../../model/departement';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { Observable } from 'rxjs';
import { OrganismeService } from 'src/app/services/organisme.service';
import { Organisme } from 'src/model/organisme';
import { map } from 'rxjs/operators';
import { DepartementService } from 'src/app/services/departement.service';
import {  Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/model/user';

@Component({
  selector: 'app-fiche2',
  templateUrl: './fiche2.component.html',
  styleUrls: ['./fiche2.component.css']
})
export class Fiche2Component implements OnInit {

  selectedDepartement:any;
  selectedOrganisme:any;
  selectedUser:any;
  organismes$!:Observable<Organisme[]>;
  departements$!:Observable<Departement[]>;
  users$!:Observable<User[]>;



  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(private organismeService:OrganismeService,private departementService:DepartementService,private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    this.getAllOrganismes();
    this.getAllDepartements();
    this.getAllUsers();

    this.organismeService.getAllOrganismes().subscribe(data => this.selectedOrganisme=data[0].nom);

    this.departementService.getAllDepartements().subscribe(data => this.selectedDepartement=data[0].nom);

    this.userService.getAllUsers().subscribe(data => this.selectedUser=data[0].nom);


  }

  getAllOrganismes(){
    this.organismes$ = this.organismeService.getAllOrganismes().pipe(map(data=>{
      console.log(data); return data}));
  }

  getAllDepartements(){
    this.departements$= this.departementService.getAllDepartements().pipe(map(data=>{
      console.log(data); return data}));
  }

  getAllUsers(){
    this.users$= this.userService.getAllUsers().pipe(map(data=>{
      console.log(data,"mpmpmp"); return data}));
  }

  toFiche() {
    this.router.navigate(["dashboard/fiche"]);
  }

}

