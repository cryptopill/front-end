import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-pharmacist',
  templateUrl: './pharmacist.component.html',
  styleUrls: ['./pharmacist.component.css']
})
export class PharmacistComponent implements OnInit {

  constructor(public _dialogService: DialogService) {

  }

  ngOnInit() {
  }

  openScanner() {
    this._dialogService
      .showScannerDialog()
      .subscribe(res => console.log(res))
  }

}
