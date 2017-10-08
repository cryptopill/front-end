import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacist',
  templateUrl: './pharmacist.component.html',
  styleUrls: ['./pharmacist.component.css']
})
export class PharmacistComponent implements OnInit {

  showQRScanner: boolean

  constructor() {
    this.showQRScanner = true
  }

  ngOnInit() {
  }

  decodedOutput($event) {
    this.showQRScanner = false
    alert($event)
    setTimeout(() => {
      this.showQRScanner = true
      console.log('showing qr')
    }, 2000)
  }

}
