import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatButtonModule, MatIconModule } from '@angular/material';
import { QRCodeModule } from 'angular2-qrcode';
import { QrScannerModule } from 'angular2-qrscanner';

import { QrdialogComponent } from '../../components/qrdialog/qrdialog.component';
import { ScannerdialogComponent } from '../../components/scannerdialog/scannerdialog.component';

import { DialogService } from '../../services/dialog.service';

@NgModule({
  imports: [
    CommonModule,
    QRCodeModule,
    QrScannerModule,
    MatButtonModule, MatDialogModule, MatIconModule
  ],
  exports: [
    QrdialogComponent,
    ScannerdialogComponent
  ],
  declarations: [
    QrdialogComponent,
    ScannerdialogComponent
  ],
  providers: [
    DialogService
  ],
  entryComponents: [
    QrdialogComponent,
    ScannerdialogComponent
  ]
})
export class DialogsModule { }
