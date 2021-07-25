import { AgentPortant } from "src/app/enumeration/agentPortant";
import { Instabilite } from "src/app/enumeration/Instabilite";
import { IR } from "src/app/enumeration/ir";
import { Lymphocytes } from "src/app/enumeration/lymphocytes";

export interface Cytogenetique {

  //netudeCyto?: number;
  

  lymphocytes?: string //Lymphocytes;

  dateSang?: Date;

  idLaboratoire?: number;

  agentPortant?: string //AgentPortant;

  instabilite?: string //Instabilite;

  instabilitePourcentage?: number;

  ir?: string //IR;

  irPourcentage?: number;

  moelle?: string;

  dateMoelle?: Date;

  resultatMoelle?: string;



  idFiche?: number;

}


