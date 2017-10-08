import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatButtonModule } from '@angular/material';

import { QrdialogComponent } from '../../components/qrdialog/qrdialog.component';

import { DialogService } from '../../services/dialog.service';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatDialogModule
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
