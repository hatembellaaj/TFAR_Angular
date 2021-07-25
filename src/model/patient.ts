import { Gouvernorat } from "src/app/enumeration/gouvernorat";
import { Sexe } from "src/app/enumeration/sexe";

export interface Patient {

  idPatient: number;

  nDPatient: string;

  nom: string;

  prenom: string;

  sexe?: string //Sexe;

  dateNaissance?: string;

  lieuNaissance?: string;

  adresse?: string;

  reperes?: string;

  gouvernorat?: string //Gouvernorat;

  tel?: string;

  prenomPere?: string;

  nomMere?: string;

  prenomMere?: string;

  nomGmp?: string;

  nomGmm?: string;

  //age?: number;

  idFiche: number;

}

