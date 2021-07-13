import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fiche2-signes-hema',
  templateUrl: './signes-hema.component.html',
  styleUrls: ['./signes-hema.component.css']
})
export class SignesHemaComponent implements OnInit {

  hb:any;

  leuco:any;

  vgm:any;

  pnn:any;

  retic:any;

  plq:any;

  agedeb:any;

  hbf:any;

  Erythroblastes:any;

  pourcAdi:any;

  tabenum1 = ['Oui', 'Non', 'NP', 'moin1'];

  tabenum2=['Faite', 'Nonfaite', 'Moin1', 'NP'];

  tabenum4=['Normale', 'Diminuee', 'Moin1', 'NP'];

  tabenum5=['Normale', 'Dysplasie', 'Moin1'];

  tabenum6=['Nonfaite', 'Normale', 'Hypoplasie', 'Aplasie', 'Moin1'];

  enum1='NP';

  enum2='NP';

  enum3='NP';

  enum4='NP';

  enum5='NP';

  enum6='NP';

  enum7='Moin1';

  enum8='Moin1';

  constructor() { }

  ngOnInit(): void {
  }

}
