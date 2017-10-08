import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { QRCodeComponent } from 'angular2-qrcode';

@Component({
  selector: 'app-qrdialog',
  templateUrl: './qrdialog.component.html',
  styleUrls: ['./qrdialog.component.css']
})
export class QrdialogComponent implements OnInit {

  public address: string;
  public hasBeenCollected: boolean;

  constructor(public _dialogRef: MatDialogRef<QrdialogComponent>) { }

  ngOnInit() {
  }

}
