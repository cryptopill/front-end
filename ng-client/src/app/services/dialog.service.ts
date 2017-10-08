import { Injectable } from '@angular/core';
import { QrdialogComponent } from '../components/qrdialog/qrdialog.component';
import { ScannerdialogComponent } from '../components/scannerdialog/scannerdialog.component';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DialogService {

  constructor(private dialog: MatDialog) { }

  public showQRDialog(qr: string, hasBeenCollected: boolean): Observable<boolean> {
    let _dialogRef: MatDialogRef<QrdialogComponent>

    _dialogRef = this.dialog.open(QrdialogComponent)
    _dialogRef.componentInstance.address = qr
    _dialogRef.componentInstance.hasBeenCollected = hasBeenCollected

    return _dialogRef.afterClosed()
  }

  public showScannerDialog(): Observable<string> {
    let _dialogRef: MatDialogRef<ScannerdialogComponent>
    _dialogRef = this.dialog.open(ScannerdialogComponent)
    return _dialogRef.afterClosed()
  }

}
