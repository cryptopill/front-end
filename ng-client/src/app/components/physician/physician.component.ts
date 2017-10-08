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

  patients: Patient[]
  medicines: Medicine[]

  selectedPatient: Patient
  selectedMedicine: Medicine

  newMedicine: Medicine = new Medicine()

  constructor(private _dataService: DataService, public _dialogService: DialogService) {

  }

  ngOnInit() {
    this._dataService.getUsers()
      .subscribe(patients => this.patients = patients)

    this.connection = this._dataService.getUpdate()
      .subscribe(data => {
        this._dataService.getUsers()
          .subscribe(patients => {

            if (this.patients) {
              this.patients.forEach(patient => {
                if (this.selectedPatient && patient.address === this.selectedPatient.address) {
                  this.selectedPatient = patient
                  this.medicines = patient.medicines
                }
              })
            }

            this.patients = patients
          })
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

  sendMedicine() {
    var today: any = new Date();
    var dd: any = today.getDate();
    var mm: any = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '/' + mm + '/' + yyyy;

    this.newMedicine.doi = today
    this.newMedicine.distributed = false
    this.newMedicine.medAddress = Date.now().toString()
    console.log(this.newMedicine)
    this._dataService.sendNewMedicine(this.newMedicine)
      .subscribe(res => {
        this.newMedicine = new Medicine()
        console.log(res)
      })
  }

}
