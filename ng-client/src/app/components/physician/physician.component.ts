import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient';
import { Medicine } from '../../models/medicine';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-physician',
  templateUrl: './physician.component.html',
  styleUrls: ['./physician.component.css']
})
export class PhysicianComponent implements OnInit {
  
  patients: Patient []
  medicines: Medicine []

  selectedPatient: Patient

  constructor(private _dataService: DataService) {

  }

  ngOnInit() {
    this._dataService.getUsers()
      .subscribe(patients => this.patients = patients)
  }

  selectPatient(patient: Patient) {
    this.medicines = patient.medicines;
    this.selectedPatient = patient;
    console.log(patient)
  }

  selectMedicine(medicine: Medicine) {
    console.log(medicine.medAddress)
  }

}
