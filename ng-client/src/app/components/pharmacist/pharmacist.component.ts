import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-pharmacist',
  templateUrl: './pharmacist.component.html',
  styleUrls: ['./pharmacist.component.css']
})
export class PharmacistComponent implements OnInit {

  patientAddress: string;
  medicineAddress: string;

  constructor(public _dialogService: DialogService) {

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

}
