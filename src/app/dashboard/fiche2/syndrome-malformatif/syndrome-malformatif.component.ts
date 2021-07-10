import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'fiche2-syndrome-malformatif',
  templateUrl: './syndrome-malformatif.component.html',
  styleUrls: ['./syndrome-malformatif.component.css']
})
export class SyndromeMalformatifComponent implements OnInit, DoCheck {

  tab: number[] = [];

  tab2: number[] = [];

  tab3: number[] = [];

  tab4: number[] = [];

  tab5: number[] = [];

  tab6: number[] = [];

  el1: any;

  el2: any;

  el3: any;

  el33:any;

  el4: any;

  el44:any;

  el4o:any;

  el5: any;

  el6: any;

  colorPeau: any;

  autre: any;

  tabenum1 = ['Oui', 'Non', 'NP', 'moin1']

  enum11 = 'NP';

  enum111 = 'NP';

  enum1122 = 'NP';

  enum112 = 'NP';

  enum113 = 'NP';

  enum114 = 'NP';

  enum115 = 'NP';

  enum116 = 'NP';

  enum117 = 'NP';

  enum118 = 'NP';

  enum119 = 'NP';

  enum12 = 'NP';

  enum13 = 'NP';

  enum14 = 'NP';

  enum15 = 'NP';

  enum16 = 'NP';

  enum17 = 'NP';

  enum18 = 'NP';

  enum19 = 'NP';

  enum20 = 'NP';

  enum21 = 'NP';

  enum22 = '';

  enum23 = 'NP';

  enum24 = '';

  enum25 = 'NP';

  enum26 = 'NP';

  enum27 = 'NP';

  enum28 = 'NP';

  enum29 = 'NP';

  enum30 = 'NP';

  enum31 = 'NP';

  enum32 = 'NP';

  enum33 = 'NP';

  enum34='NP';

  enum35='NP';

  enum36='NP';

  enum37='NP';

  enum38='NP';

  enum39='NP';

  enum40='NP';

  enum41='NP';

  enum42='NP';

  enum43='NP';

  enum44='NP';

  enum45='NP';

  enum46='NP';

  enum47='NP';

  enum48='NP';

  tabDS = ['NP', 'M', '-2 DS', '-3 DS', '-4 DS', '+ DS'];

  elDS = 'NP';

  elDS1 = 'NP';

  autre1: any;

  autrev: any;

  siegeEcto: any;

  typeAnom: any;

  typeAnomomalie:any;

  anomomalieRachis:any;

  anomalieOsseuse:any;

  Autrew:any;

  m: any;

  p: any;

  t: any;

  panom:any;

  panom1:any;

  aged:any;

  autresSymp:any;

  autresanoCong:any;

  autrem = 'autreMU';

  tabenum2 = ['Faite', 'Nonfaite', 'Moin1', 'NP'];

  tabepRein = ['non', 'rein gauche', 'rein droit', 'rein bilateral', ''];

  tabEctoTest = ['', 'non', 'droit', 'gauche', 'bilateral'];

  tabAnomVerg = ['NP', 'non', 'inseffisament developpe', 'hypospadias', 'epispadias', 'Autre'];

  tabperfSco=['Vide', 'Bonne', 'Mauvaise', 'Moyenne', 'NP', 'NonScolaire', 'Moin1'];

  constructor() { }
  ngDoCheck(): void {

    if (this.enum112 != 'oui') {

      this.enum113 = 'NP';

      this.enum114 = 'NP';

      this.enum115 = 'NP';

      this.enum116 = 'NP';

      this.enum117 = 'NP';

      this.enum118 = 'NP';

    }

    if (this.enum20 != 'Oui') {
      this.siegeEcto = '';
    }

    if (this.enum26 != 'Oui') {
      this.typeAnom = '';
    }

    if (this.enum27 != 'Oui') {
      this.m = '';
      this.p = '';
      this.t = '';
    }

    if (this.enum30 != 'Oui') {
      this.enum31 = 'NP';
      this.enum32 = 'NP';
      this.autrev = '';
    }

    if (this.enum34 != 'Oui') {
      this.typeAnomomalie = '';
    }

    if (this.enum43 != 'Oui') {
      this.panom = '';
    }

    if (this.enum44 != 'Oui') {
      this.panom1 = '';
    }

    if (this.enum45 != 'Oui') {
      this.enum46 = 'NP';
      this.enum47 = 'NP';
      this.enum48 = 'NP';
      this.aged='';
      this.autresSymp='';
    }

  }

  ngOnInit(): void {
    this.rempTab();
    this.rempTab2();
    this.rempTab3();
    this.rempTab4();
    this.rempTab5();
    this.rempTab6();
  }

  rempTab() {
    for (let i = 30; i <= 60; i++) {
      this.tab.push(i);
    }
  }

  rempTab3() {
    for (let i = 0; i <= 80; i++) {
      this.tab3.push(i);
    }
  }

  rempTab4() {
    for (let i = 0; i <= 12; i++) {
      this.tab4.push(i);
    }
  }

  rempTab5() {
    for (let i = 0; i <= 100; i++) {
      this.tab5.push(i);
    }
  }

  rempTab6() {
    for (let i = 50; i <= 200; i++) {
      this.tab6.push(i);
    }
  }

  rempTab2() {
    for (let i = 1.5; i <= 5; i = i + this.fct(0.1)) {
      this.tab2.push(this.fct(i));
    }
  }

  fct(i: number) {
    return Math.round(i * 10) / 10;

  }




}
