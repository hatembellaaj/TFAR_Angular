import { Patient } from './../../../../model/patient';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'fiche2-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patient!: Patient;

  gouvernorat = ['Ariana', 'Beja', 'BenArous', 'Bizerte', 'Gabes', 'Gafsa', 'Jendouba'
    , 'Kairouan', 'Kasserine', 'Kebili', 'LeKef', 'Mahdia', 'LaManouba',
    'Medenine', 'Monastir', 'Nabeul', 'Sfax', 'SidiBouzid', 'Siliana', 'Sousse', 'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan', 'NP'];

  date = new FormControl(new Date());



  list = [{ "name": "M" }, { "name": "F" }];

  chosenItem = this.list[0].name;


  constructor() {
    this.patient = { sexe: this.chosenItem, gouvernorat: 'NP', dateNaissance: this.date.value } as Patient;
  }

  ngOnInit(): void {
  }

  radioChange() {
    this.patient.sexe = this.chosenItem;

  }

  savePatientInformations() {
    return this.patient;
  }

}
