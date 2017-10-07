import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient';
import { Medicine } from '../../models/medicine';

@Component({
  selector: 'app-physician',
  templateUrl: './physician.component.html',
  styleUrls: ['./physician.component.css']
})
export class PhysicianComponent implements OnInit {
  
  patients: Patient []
  medicines: Medicine []

  constructor() {
    this.patients = [
      {
        name: 'Vishnu',
        num_prescriptions: 9001,
        address: (Date.now() + Math.ceil(Math.random()*5000)).toString()
      },
      {
        name: 'Carlo',
        num_prescriptions: 5,
        address: (Date.now() + Math.ceil(Math.random()*5000)).toString()
      },
      {
        name: 'Darth Myat',
        num_prescriptions: 8,
        address: (Date.now() + Math.ceil(Math.random()*5000)).toString()
      },
      {
        name: 'Nathaniel',
        num_prescriptions: 3,
        address: (Date.now() + Math.ceil(Math.random()*5000)).toString()
      },
      {
        name: 'Benedict Cumbersnack',
        num_prescriptions: 2,
        address: (Date.now() + Math.ceil(Math.random()*5000)).toString()
      },
      {
        name: 'Dick Chaney',
        num_prescriptions: 100,
        address: (Date.now() + Math.ceil(Math.random()*5000)).toString()
      },
      {
        name: 'Kurt Cobain',
        num_prescriptions: 1000000,
        address: (Date.now() + Math.ceil(Math.random()*5000)).toString()
      }
    ]

    this.medicines = [
      {
        name: 'coke',
        strength: 0.3,
        num_capsules: 10,
        doi: '10/07/2017'
      },
      {
        name: 'cough syrup',
        strength: 0.3,
        num_capsules: 10,
        doi: '10/07/2017'
      },
      {
        name: 'antibiotics',
        strength: 0.3,
        num_capsules: 10,
        doi: '10/07/2017'
      },
      {
        name: 'skittles',
        strength: 0.3,
        num_capsules: 10,
        doi: '10/07/2017'
      },
      {
        name: 'red bull',
        strength: 0.3,
        num_capsules: 10,
        doi: '10/07/2017'
      },
      {
        name: 'soylent',
        strength: 0.3,
        num_capsules: 10,
        doi: '10/07/2017'
      }
    ]
  }

  ngOnInit() {
  }

}
