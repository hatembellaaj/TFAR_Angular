import { Cytogenetique } from 'src/model/cytogenetique';
import { Androgene } from './../../../model/androgene';
import { Patient } from './../../../model/patient';
import { Departement } from '../../../model/departement';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Observable } from 'rxjs';
import { OrganismeService } from 'src/app/services/organisme.service';
import { Organisme } from 'src/model/organisme';
import { map } from 'rxjs/operators';
import { DepartementService } from 'src/app/services/departement.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/model/user';
import { Fiche } from 'src/model/fiche';

@Component({
  selector: 'app-fiche2',
  templateUrl: './fiche2.component.html',
  styleUrls: ['./fiche2.component.css']
})
export class Fiche2Component implements OnInit, OnDestroy {

  selectedDepartement: any;
  selectedOrganisme: any;
  selectedUser: any;
  organismes$!: Observable<Organisme[]>;
  departements$!: Observable<Departement[]>;
  users$!: Observable<User[]>;
  ndfiche: any;
  fich1FromChild!: Fiche;
  fich2FromChild!: Fiche;
  fich3FromChild!: Fiche;
  fich4FromChild!: Fiche;
  fich5FromChild!: Fiche;
  fich6FromChild!: Fiche;
  fich7FromChild!: Fiche;
  fich8FromChild!: Fiche;
  patientFromChild!:Patient;
  androgeneFromChild!:Androgene;
  etudeCytoFromChild!:Cytogenetique;



  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(private organismeService: OrganismeService, private departementService: DepartementService, private router: Router, private userService: UserService) {
    this.fich1FromChild = {} as Fiche;
    this.fich2FromChild = {} as Fiche;
    this.fich3FromChild = {} as Fiche;
    this.fich4FromChild = {} as Fiche;
    this.fich5FromChild = {} as Fiche;
    this.fich6FromChild = {} as Fiche;
    this.fich7FromChild = {} as Fiche;
    this.fich8FromChild = {} as Fiche;
    this.patientFromChild={} as Patient;
    this.androgeneFromChild={} as Androgene;
    this.etudeCytoFromChild={} as Cytogenetique;
  }
  ngOnDestroy(): void {
    console.log("histoire-familiale",this.fich1FromChild);
    console.log("circon-de-decouverte",this.fich2FromChild);
    console.log("syndrome-malformatif",this.fich3FromChild);
    console.log("syndrome-malformatif length ",Object.keys(this.fich3FromChild).length);
    console.log("signe_hema",this.fich4FromChild);
    console.log("signe_hema length ",Object.keys(this.fich4FromChild).length);
    console.log("biologie-moleculaire",this.fich5FromChild);
    console.log("biologie-moleculaire length ",Object.keys(this.fich5FromChild).length);
    console.log("congelation cell",this.fich6FromChild);
    console.log("congelation cell length ",Object.keys(this.fich6FromChild).length);
    console.log("score clinique",this.fich7FromChild);
    console.log("score clinique length ",Object.keys(this.fich7FromChild).length);
    console.log("traitement",this.fich8FromChild);
    console.log("traitement length ",Object.keys(this.fich8FromChild).length);
    console.log(typeof(this.fich8FromChild.androDebut));
    console.log("patient",this.patientFromChild);
    console.log("patient length ",Object.keys(this.patientFromChild).length);
    console.log("androgene",this.androgeneFromChild);
    console.log("androgene length ",Object.keys(this.androgeneFromChild).length);
    console.log("etudeCyto",this.etudeCytoFromChild);
    console.log("etudeCyto length ",Object.keys(this.etudeCytoFromChild).length);

  }

  ngOnInit(): void {
    this.getAllOrganismes();
    this.getAllDepartements();
    this.getAllUsers();

    this.organismeService.getAllOrganismes().subscribe(data => this.selectedOrganisme = data[0].nom);

    this.departementService.getAllDepartements().subscribe(data => this.selectedDepartement = data[0].nom);

    this.userService.getAllUsers().subscribe(data => this.selectedUser = data[0].nom);


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

  getAllUsers() {
    this.users$ = this.userService.getAllUsers().pipe(map(data => {
      console.log(data, "mpmpmp"); return data
    }));
  }

  toFiche() {
    this.router.navigate(["dashboard/fiche"]);
  }

}

