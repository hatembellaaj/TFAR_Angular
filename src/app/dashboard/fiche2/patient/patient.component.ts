import { Patient } from './../../../../model/patient';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'fiche2-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patient!: Patient;
  @Output() patientChange: EventEmitter<Patient> = new EventEmitter<Patient>();

  gouvernorat = ['Ariana', 'Beja', 'BenArous', 'Bizerte', 'Gabes', 'Gafsa', 'Jendouba'
    , 'Kairouan', 'Kasserine', 'Kebili', 'LeKef', 'Mahdia', 'LaManouba',
    'Medenine', 'Monastir', 'Nabeul', 'Sfax', 'SidiBouzid', 'Siliana', 'Sousse', 'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan', 'NP'];



  list = [{ "name": "M" }, { "name": "F" }];

  chosenItem = this.list[0].name;


  constructor() {
    this.patient = { sexe: this.chosenItem, gouvernorat: 'NP' } as Patient;
  }

  ngOnInit(): void {
  }

  public onChangePatient() {
    this.patientChange.emit(this.patient);
  }

  radioChange() {
    this.patient.sexe = this.chosenItem;
    this.onChangePatient();

  }

}
