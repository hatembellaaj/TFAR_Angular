import { Fiche } from './../../../model/fiche';
import { Departement } from '../../../model/departement';
import { Component, Injector, OnDestroy, OnInit, ViewChild, DoCheck } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Observable } from 'rxjs';
import { Organisme } from 'src/model/organisme';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/model/user';
import { FormControl } from '@angular/forms';
import { FicheService } from 'src/app/services/fiche.service';
import { PatientComponent } from './patient/patient.component';
import { HistoireFamilialeComponent } from './histoire-familiale/histoire-familiale.component';
import { AndrogeneComponent } from './androgene/androgene.component';
import { CirconDeDecouverteComponent } from './circon-de-decouverte/circon-de-decouverte.component';
import { SyndromeMalformatifComponent } from './syndrome-malformatif/syndrome-malformatif.component';
import { EtudeCytoComponent } from './etude-cyto/etude-cyto.component';
import { SignesHemaComponent } from './signes-hema/signes-hema.component';
import { BiologieMoleculaireComponent } from './biologie-moleculaire/biologie-moleculaire.component';
import { CongelationCellComponent } from './congelation-cell/congelation-cell.component';
import { ScoreCliniqueComponent } from './score-clinique/score-clinique.component';
import { TraitementComponent } from './traitement/traitement.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DashboardComponent } from '../dashboard.component';


@Component({
  selector: 'app-fiche2',
  templateUrl: './fiche2.component.html',
  styleUrls: ['./fiche2.component.css']
})
export class Fiche2Component implements OnInit, OnDestroy{


  @ViewChild(PatientComponent) patientComponent!: PatientComponent;
  @ViewChild(AndrogeneComponent) androgeneComponent!: AndrogeneComponent;
  @ViewChild(HistoireFamilialeComponent) histoireFamilialeComponent!: HistoireFamilialeComponent;
  @ViewChild(CirconDeDecouverteComponent) circonDeDecouverteComponent!: CirconDeDecouverteComponent;
  @ViewChild(SyndromeMalformatifComponent) syndromeMalformatifComponent!: SyndromeMalformatifComponent;
  @ViewChild(EtudeCytoComponent) etudeCytoComponent!: EtudeCytoComponent;
  @ViewChild(SignesHemaComponent) SignesHemaComponent!: SignesHemaComponent;
  @ViewChild(BiologieMoleculaireComponent) biologieMoleculaireComponent!: BiologieMoleculaireComponent;
  @ViewChild(CongelationCellComponent) congelationCellComponent!: CongelationCellComponent;
  @ViewChild(ScoreCliniqueComponent) ScoreCliniqueComponent!: ScoreCliniqueComponent;
  @ViewChild(TraitementComponent) TraitementComponent!: TraitementComponent;


  selectedDepartement: any;
  selectedOrganisme: any;
  selectedUser: any;
  organismes$!: Observable<Organisme[]>;
  departements$!: Observable<Departement[]>;
  users$!: Observable<User[]>;
  ndfiche: any;
  ficheI!: Fiche;
  date1 = new FormControl(new Date());
  date2 = new FormControl(new Date());
  ficheb!: Fiche;

  parentComponent!:any;






  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(private ficheService: FicheService, private router: Router, private userService: UserService,private _snackBar: MatSnackBar) {







    }



  ngOnDestroy(): void {


    }

  ngOnInit(): void {
      this.getAllUsers();
      this.userService.getAllUsers().subscribe(data => this.selectedUser = data[0]?.code);

      this.ficheI = { dateDiagnostique: this.date1.value, dateEnregistrement: this.date2.value, codeUser: this.selectedUser } as Fiche;


    }

    openSnackBar(message: string, action: string, duration: number) {
      this._snackBar.open(message, action, { duration: duration });
    }


  getAllUsers() {
      this.users$ = this.userService.getAllUsers().pipe(map(data => {
        console.log(data, "mpmpmp"); return data
      }));
    }

    saveFiche(){
      let ficheToSave = {} as Fiche;
      Object.assign(ficheToSave , this.ficheI);

      let patient= this.patientComponent.savePatientInformations();
      ficheToSave.patient=patient;
      //Object.assign(ficheToSave , patient);
      //ficheToSave.patient = patient;

      let histoireFamiliale = this.histoireFamilialeComponent.saveFamille();
      Object.assign(ficheToSave , histoireFamiliale);

      let circonstanceDecouverte= this.circonDeDecouverteComponent.saveCirDecInformations();
      Object.assign(ficheToSave , circonstanceDecouverte);

      let SyndromeMalformatif=this.syndromeMalformatifComponent.saveSandMalInformations();
      Object.assign(ficheToSave , SyndromeMalformatif);

      let EtudeCyto=this.etudeCytoComponent.saveCytoInformations();
      ficheToSave.cytogenetique=EtudeCyto;

      let androgene=this.androgeneComponent.saveAndrogeneInformations();
      ficheToSave.androgene=androgene;

      let SignesHema=this.SignesHemaComponent.saveSigneHemaInformations();
      Object.assign(ficheToSave , SignesHema);

      let BiologieMoleculaire=this.biologieMoleculaireComponent.saveBioMolecInformations();
      Object.assign(ficheToSave , BiologieMoleculaire);

      let CongelationCell=this.congelationCellComponent.saveCongCellInformations();
      Object.assign(ficheToSave , CongelationCell);

      let ScoreClinique=this.ScoreCliniqueComponent.saveScoreCliInformations();
      Object.assign(ficheToSave , ScoreClinique);

      let Traitement=this.TraitementComponent.saveTraitInformations();
      Object.assign(ficheToSave , Traitement);

      console.log(ficheToSave,"mokkkkkk")


      this.ficheService.saveFiche(ficheToSave).subscribe(
        res => {
          console.log(res)
          this.router.navigate(["dashboard/fiche"]);
        },
        err => { console.log(err.message);

          if (err.status == 500) {
            this.openSnackBar("You must enter the required attributes", "Submit data fail", 3000);

          }

        }
      );
    }



  toFiche() {
      this.router.navigate(["dashboard/fiche"]);
    }

  do () {
      console.log(this.ficheI.dateEnregistrement, "ddddoooo");

      console.log(typeof (this.ficheI.dateEnregistrement), "ddddoooo1");
    }

}


