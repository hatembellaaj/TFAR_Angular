import { OrganismeType } from "src/app/enumeration/organismeType";


export interface Organisme {
  code?: number ;
  nom: string;
  adresse: string;
  tel: string;
  contact: string;
  email: string;
  type: string //OrganismeType;

}
