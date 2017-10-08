import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-scannerdialog',
  templateUrl: './scannerdialog.component.html',
  styleUrls: ['./scannerdialog.component.css']
})
export class ScannerdialogComponent implements OnInit {

  constructor(public _dialogRef: MatDialogRef<ScannerdialogComponent>) {
  }

  ngOnInit() {
  }

  decodedOutput($event) {
    this._dialogRef.close($event)
  }

}
