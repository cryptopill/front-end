import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatButtonModule, MatIconModule } from '@angular/material';
import { QRCodeModule } from 'angular2-qrcode';

import { QrdialogComponent } from '../../components/qrdialog/qrdialog.component';

import { DialogService } from '../../services/dialog.service';

@NgModule({
  imports: [
    CommonModule,
    QRCodeModule,
    MatButtonModule, MatDialogModule, MatIconModule
  ],
  exports: [
    QrdialogComponent
  ],
  declarations: [
    QrdialogComponent
  ],
  providers: [
    DialogService
  ],
  entryComponents: [
    QrdialogComponent
  ]
})
export class DialogsModule { }
