import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CommonService } from '../common.service';
import * as localforage from 'localforage';

@Component({
  selector: 'app-step8',
  templateUrl: './step8.component.html',
  styleUrls: ['./step8.component.css'],
})
export class Step8Component implements OnInit {
  public step8Form: FormGroup;
  @Output() gotoStepEvent = new EventEmitter<number>();

  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService
  ) {}

  imageBase: string;
  activeClass: string;
  submitted: boolean = false;

  ngOnInit() {
    this.imageBase = this.commonService.getImageBase();

    this.step8Form = this.formBuilder.group({
      purchase_year: ['', [Validators.required]],
      home_value: ['', [Validators.required]],
      mortgage_balance: ['', [Validators.required]],
      loan_interest_rate: ['', [Validators.required]],
      rate_type: ['fixed', [Validators.required]],
      second_mortgage: ['yes', [Validators.required]],
      additional_funds: ['', [Validators.required]],
      zip_code: ['', [Validators.required, this.validateZipCode]],
    });

    localforage.getItem('step8Form').then((value) => {
      if (value) this.step8Form.patchValue(value);
    });
  }

  validateZipCode(control: AbstractControl) {
    const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    if (control.value && !isValidZip.test(control.value)) {
      return { invalid: true };
    }
    return null;
  }

  get formControl() {
    return this.step8Form.controls;
  }

  gotoStep7() {
    this.gotoStepEvent.emit(7);
  }

  submitStep8() {
    this.submitted = true;
    if (this.step8Form.valid) {
      localforage.setItem('step8Form', this.step8Form.value).then(() => {
        this.gotoStepEvent.emit(9);
      });
    }
  }
}
