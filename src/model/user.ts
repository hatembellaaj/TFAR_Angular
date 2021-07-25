import { Gouvernorat } from "src/app/enumeration/gouvernorat";
import { RoleType } from "src/app/enumeration/roleType";
import { TypeUser } from "src/app/enumeration/typeUser";


export interface User {

  code?: number;

  role?: string //RoleType;

  type?: string //TypeUser;

  nom?: string;

  prenom?: string;

  grade?: string;

  gouvernorat?: string //Gouvernorat;

  adresse?: string;

  tel?: string;

  email?: string;

  photo?: string;

  poste?: string;

  fax?: string;

  login?: string;

  password?: string;

  url?: string;

  codeOrganisme?: number;

  nomOrganisme?: string;

  codeDepartement?: number;

  nomDepartement?: string;


}
