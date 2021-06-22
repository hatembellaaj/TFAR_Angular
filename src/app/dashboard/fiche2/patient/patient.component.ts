import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fiche2-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  selectedgv:any;

  gouvernorat:any;


  constructor() { }

  ngOnInit(): void {
    this.gouvernorat=['Ariana', 'Beja', 'BenArous', 'Bizerte', 'Gabes', 'Gafsa', 'Jendouba'
    , 'Kairouan', 'Kasserine', 'Kebili', 'LeKef', 'Mahdia', 'LaManouba',
      'Medenine', 'Monastir', 'Nabeul', 'Sfax', 'SidiBouzid', 'Siliana', 'Sousse', 'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan', 'NP'];
      this.selectedgv=this.gouvernorat[this.gouvernorat.length-1];
  }

}
