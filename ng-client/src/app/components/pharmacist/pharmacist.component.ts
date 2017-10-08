import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../services/dialog.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-pharmacist',
  templateUrl: './pharmacist.component.html',
  styleUrls: ['./pharmacist.component.css']
})
export class PharmacistComponent implements OnInit {

  patientAddress: string
  medicineAddress: string
  successMedicine: boolean

  constructor(public _dialogService: DialogService, private _dataService: DataService) {

  }

  ngOnInit() {
  }

  openScanner(addressRef) {
    this._dialogService
      .showScannerDialog()
      .subscribe(res => {
        if(res) {
          if(addressRef === 'p')
            this.patientAddress = res

          if(addressRef === 'm')
            this.medicineAddress = res
        }
      })
  }

  sendPrescription() {
    this._dataService.registerPrescription({
      medAddress: this.medicineAddress,
      patientAddress: this.patientAddress
    }).subscribe(res => {
      this.successMedicine = res
    })
  }

}
