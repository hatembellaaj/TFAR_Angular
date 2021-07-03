import { OrganismeType } from "src/app/enumeration/OrganismeType";


export interface Organisme {
  code: number ;
  nom: string;
  adresse: string;
  tel: string;
  contact: string;
  email: string;
  type: OrganismeType;

}
