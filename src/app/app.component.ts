import { Component, OnInit } from '@angular/core';
import * as localforage from 'localforage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentStep: number = 1;
  totalStep: number = 11;
  percentageComplete: number = 0;
  typeOfLoan: string;
  constructor() {}

  ngOnInit() {
    localforage.getItem('currentStep').then((value: number) => {
      if (value) {
        this.currentStep = value;
        this.stepCalculate();
      }
    });

    localforage.getItem('step1Form').then((value: { type_of_loan: string }) => {
      if (value) {
        this.typeOfLoan = value.type_of_loan;
      }
    });
  }

  stepEventHandler($event: number) {
    localforage
      .setItem('currentStep', $event || this.currentStep)
      .then((value) => {
        this.currentStep = value;
        this.stepCalculate();
      });

    localforage.getItem('step1Form').then((value: { type_of_loan: string }) => {
      if (value) {
        this.typeOfLoan = value.type_of_loan;
      }
    });
  }

  stepCalculate() {
    this.percentageComplete =
      this.currentStep === 1
        ? 0
        : Math.ceil((this.currentStep / this.totalStep) * 100);
  }
}
