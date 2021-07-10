import { Enum1 } from './../../../enumeration/Enum1';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'fiche2-circon-de-decouverte',
  templateUrl: './circon-de-decouverte.component.html',
  styleUrls: ['./circon-de-decouverte.component.css']
})
export class CirconDeDecouverteComponent implements OnInit {



  tabenum1=['Oui', 'Non', 'NP', 'moin1']

  typeCancer:any;

  autres:any;

  enuma1='NP';

  enuma2='NP';

  enuma3='NP';

  enuma4='NP';

  enuma5='NP';

  enuma6='NP';


  constructor() { }

  ngOnInit(): void {
  }

}
