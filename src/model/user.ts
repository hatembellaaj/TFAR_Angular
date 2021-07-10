import { Gouvernorat } from "src/app/enumeration/Gouvernorat";
import { RoleType } from "src/app/enumeration/RoleType";
import { TypeUser } from "src/app/enumeration/TypeUser";


export interface User {

  code: number;

  role: RoleType;

  type: TypeUser;

  nom: string;

  prenom: string;

  grade: string;

  gouvernorat: Gouvernorat;

  adresse: string;

  tel: string;

  email: string;

  photo: string;

  poste: string;

  fax: string;

  login: string;

  password: string;

  url: string;

  codeOrganisme: number;

  nomOrganisme: string;

  codeDepartement: number;

  nomDepartement: string;


}
