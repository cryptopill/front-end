import { Component, OnInit, OnDestroy } from '@angular/core';
import { Patient } from '../../models/patient';
import { Medicine } from '../../models/medicine';

import { DataService } from '../../services/data.service';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-physician',
  templateUrl: './physician.component.html',
  styleUrls: ['./physician.component.css']
})
export class PhysicianComponent implements OnInit, OnDestroy {
  connection;

  patients: Patient []
  medicines: Medicine []

  selectedPatient: Patient

  constructor(private _dataService: DataService, public _dialogService: DialogService) {
    
  }

  ngOnInit() {
    this._dataService.getUsers()
      .subscribe(patients => this.patients = patients)

    this.connection = this._dataService.getUpdate()
      .subscribe(meds => {
        console.log(meds)
      })
  }

  ngOnDestroy() {
    this.connection.unsubscribe()
  }

  selectPatient(patient: Patient) {
    this.medicines = patient.medicines;
    this.selectedPatient = patient;
    console.log(patient)
  }

  selectMedicine(medicine: Medicine) {
    console.log(medicine.medAddress)
    this._dialogService
      .showQRDialog(medicine.medAddress, medicine.distributed)
      .subscribe(res => console.log(res))
  }

}
