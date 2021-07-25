import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit, DoCheck } from '@angular/core';
import { Fiche } from 'src/model/fiche';

@Component({
  selector: 'fiche2-traitement',
  templateUrl: './traitement.component.html',
  styleUrls: ['./traitement.component.css']
})
export class TraitementComponent implements OnInit, DoCheck {

  fiche8!: Fiche;
  @Output() fiche8Change: EventEmitter<Fiche> = new EventEmitter<Fiche>();

  a: any;

  tabenum1 = ['Oui', 'Non', 'NP', 'moin1'];

  tabenum8 = ['Moin1', 'Inf10', 'Between10Et20', 'Sup20'];

  tab = ['', 'Bonne', 'Moyenne', 'Mediocre'];

  toxicite = ['Virilisation', 'Hepatique', 'Autre', 'Moin1'];

  tableau: number[] = [];

  tableau1: number[] = [];

  donneur = ['FF', 'FM', 'MF', 'MM', 'Mere', 'Pere'];

  tabp = ['', 'condition socio-economique', 'Refus', 'Deces', 'Donneur Fonconie', 'malade polytransfuse', 'Autre'];

  tabirr = ['', 'non', 'TBI', 'TNI', 'NP', 'Autre'];

  tabenum2 = ['Faite', 'Nonfaite', 'Moin1', 'NP'];

  tabSouche = ['', 'Cordon', 'Moelle', 'Sang peripherique'];

  tabenum9 = ['Zero', 'I', 'II', 'III', 'IV', 'Moin1'];

  tabenum10 = ['Aucune', 'Limitee', 'Extensive', 'Moin1'];

  taigue = ['', 'Myeloblastique', 'Lymphoplastique', 'NP'];

  tabstatut = ['', 'PDV', 'Vivant en RC', 'Vivant en RP', 'Vivant en RM', 'Echec', 'Decede', 'Manque d information'];

  constructor() {

    this.rempTab();
    this.rempTab1();

    this.fiche8 = {
      transfusion: 'NP', ageTransf: 0, delaiDiag: 0, nbCG: 'Moin1', nbCP: 'Moin1', chelationFer: 'NP', nilevar: 'NP', oxymetholone: 'NP', androtordyl: 'NP', toxicite: 'Moin1',
      enqueteHLA: 'NP', nbFratTyp: 0, nbFratNTyp: 0, donneurComp: this.tableau[0], greffeFaite: 'NP', delaiRappDiag: 0, cyclophosphamide: 'NP', fludarabine: 'NP', busulfan: 'NP',
      irradiation: 'NP', serotherapie: 'NP', gradeaGvH: 'Moin1', cgvH: 'Moin1', mvo: 'NP', complicationPulmonaire: 'NP', survieJ100: 'NP', smd: 'NP', transformationAigue: 'NP', ageDiagLA: 0,
      traitementLA: 'NP', cancerE: 'NP', evolution_cyto: 'NP'

    } as Fiche;

  }

  public onChangeFiche8() {
    this.fiche8Change.emit(this.fiche8);
  }

  ngDoCheck(): void {

    if (this.fiche8.chelationFer != 'Oui') {
      this.fiche8.chelateur = '';
    }

    if (this.fiche8.cyclophosphamide != 'Oui') {
      this.fiche8.doseCum1 = 0;

    }
    if (this.fiche8.fludarabine != 'Oui') {
      this.fiche8.doseCum2 = 0;

    }

    if (this.fiche8.busulfan != 'Oui') {
      this.fiche8.doseCum3 = 0;
    }

    if (this.fiche8.serotherapie != 'Faite') {
      this.fiche8.sal = 'NP';
    }
    if (this.fiche8.sal != 'Oui') {
      this.fiche8.doseSAL = 0;

    }

    if (this.fiche8.complicationPulmonaire != 'Oui') {
      this.fiche8.preciseCompPulm = '';
    }

    if (this.fiche8.smd != 'Oui') {
      this.fiche8.ageDiagSMD = 0;
    }

    if (this.fiche8.cancerE != 'Oui') {
      this.fiche8.localisation = '';
      this.fiche8.typeHistologique = '';
      this.fiche8.traitementCancer = 'NP';
    }

    if (this.fiche8.traitementCancer != 'Oui') {
      this.fiche8.preciseTraitement = '';
    }

    if (this.fiche8.evolution_cyto != 'Oui') {
      this.fiche8.formuleChrom = '';
      this.fiche8.ageE = 0;
    }

  }

  ngOnInit(): void {

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

  public onDate(a: Date): void {
    this.fiche8.androDebut = a;
    this.onChangeFiche8();

  }

}
