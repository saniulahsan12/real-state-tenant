import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import * as localforage from 'localforage';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-step8-purchase',
  templateUrl: './step8-purchase.component.html',
  styleUrls: ['./step8-purchase.component.css'],
})
export class Step8PurchaseComponent implements OnInit {
  public step8Form: FormGroup;
  @Output() gotoStepEvent = new EventEmitter<number>();

  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService
  ) {}

  imageBase: string;
  activeClass: string;
  propertyUse: string;
  submitted: boolean = false;

  ngOnInit() {
    this.imageBase = this.commonService.getImageBase();

    this.step8Form = this.formBuilder.group({
      loan_purpose_purchase: ['', [Validators.required]],
      purchase_price: ['', [Validators.required]],
      down_payment: ['', [Validators.required]],
      rate_type: ['fixed', [Validators.required]],
      first_time_buyer: ['yes', [Validators.required]],
      zip_code: ['', [Validators.required, this.validateZipCode]],
    });

    localforage.getItem('step8Form').then((value) => {
      if (value) this.step8Form.patchValue(value);
    });

    localforage.getItem('step3Form').then((value: { property_use: string }) => {
      if (value) {
        this.propertyUse = value.property_use;
      }
    });
  }

  humanKeyMapper(keyStr: string): string {
    return keyStr.split('_').join(' ');
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
