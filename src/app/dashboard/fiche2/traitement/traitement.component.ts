import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'fiche2-traitement',
  templateUrl: './traitement.component.html',
  styleUrls: ['./traitement.component.css']
})
export class TraitementComponent implements OnInit,DoCheck {

  tabenum1 = ['Oui', 'Non', 'NP', 'moin1'];

  enum1='NP';

  tabenum8=[ 'Moin1', 'Inf10', 'Between10Et20', 'Sup20'];

  tab=[ '', 'Bonne', 'Moyenne', 'Mediocre'];

  el1='';

  toxicite=['Virilisation', 'Hepatique', 'Autre', 'Moin1'];

  el2='Moin1';

  Agepret:any;

  enum2='Moin1';

  enum3='NP';

  enum4='Moin1';

  delaiprad:any;

  Chelateur:any;

  enum5='NP';

  enum6='NP';

  enum7='NP';

  el3='NP';

  el5='NP';

  el6='NP';

  el7='NP';

  el8='NP';

  autremok:any;

  autremok1:any;

  pourquoi:any;

  nbreFratType:any;

  nbreFratnType:any;

  tableau: number[]=[];

  tableau1: number[]=[];

  el4:any;

  el13:any;

  presiser:any;

  donneur=['FF','FM','MF','MM','Mere','Pere'];

  don='FF';

  delaiprad1:any;

  tabp=['','condition socio-economique','Refus','Deces','Donneur Fonconie','malade polytransfuse','Autre'];

  elp='';

  doseCumu:any;

  flu:any;

  doseCumu1:any;

  autregh:any;

  tabirr=['','non','TBI','TNI','NP','Autre'];

  el9='';

  tabenum2=['Faite', 'Nonfaite', 'Moin1', 'NP'];

  el10='NP';

  el11='NP';

  dose1:any;

  tabSouche=['','Cordon','Moelle','Sang peripherique'];

  el12='';

  tabenum9=['Zero', 'I', 'II', 'III', 'IV', 'Moin1'];

  el14='Moin1';

  tabenum10=['Aucune', 'Limitee', 'Extensive', 'Moin1'];

  el15='Moin1';

  el16='NP';

  el17='NP';

  el18='Oui';

  el19='NP';

  preciser:any;

  CritDiag:any;

  traitement:any;

  agediagSMD:any;

  taigue=['','Myeloblastique','Lymphoplastique','NP'];

  el20='';

  agediagLA='';

  el21='NP';

  el22='NP';

  localis:any;

  typeHisto:any;

  el23='NP';

  el24='NP';

  presisert:any;

  fchromoM:any;

  ageme:any;

  autrezz='AutreComplication';

  tabstatut=['','PDV','Vivant en RC','Vivant en RP','Vivant en RM','Echec','Decede','Manque d information'];

  el25='';

  survieGlobale:any;

  constructor() { }

  ngDoCheck(): void {

    if (this.enum3!='Oui'){
      this.Chelateur='';
    }

    if (this.el6!='Oui'){
      this.doseCumu='';

    }
    if (this.el7!='Oui'){
      this.flu='';

    }

    if (this.el8!='Oui'){
      this.doseCumu1='';
    }

    if (this.el10!='Faite'){
      this.el11='NP';
    }
    if (this.el11!='Oui'){
      this.dose1='';

    }

    if (this.el17!='Oui'){
      this.preciser='';
    }

    if (this.el19!='Oui'){
      this.agediagSMD='';
    }

    if (this.el23!='Oui'){
      this.presisert='';
    }

    if (this.el22!='Oui'){
      this.localis='';
      this.typeHisto='';
      this.el23='NP';
    }
    if (this.el24!='Oui'){
      this.fchromoM='';
      this.ageme='';
    }

  }

  ngOnInit(): void {
    this.rempTab();
    this.rempTab1();
  }

  rempTab() {
    for (let i = 0; i <= 4; i++) {
      this.tableau.push(i);
    }
  }

  rempTab1() {
    for (let i = 8; i <= 13; i++) {
      this.tableau1.push(i);
    }
  }

}
