import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import * as localforage from 'localforage';

@Component({
  selector: 'app-step9',
  templateUrl: './step9.component.html',
  styleUrls: ['./step9.component.css'],
})
export class Step9Component implements OnInit {
  public step9Form: FormGroup;
  @Output() gotoStepEvent = new EventEmitter<number>();

  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService
  ) {}

  imageBase: string;
  activeClass: string;
  submitted: boolean = false;
  zipCode: string;
  emailAddress: string;

  ngOnInit() {
    this.imageBase = this.commonService.getImageBase();

    this.step9Form = this.formBuilder.group({
      refinanced_before: ['', [Validators.required]],
      employment_status: ['', [Validators.required]],
      late_payments: [0, [Validators.required]],
      bankruptcy: ['no', [Validators.required]],
      has_FHA: ['no', [Validators.required]],
      mailing_address: ['', [Validators.required]],
      city_state: ['', [Validators.required]],
      proof_of_income: ['yes', [Validators.required]],
    });

    localforage
      .getItem('step7Form')
      .then((value: { email_address: string }) => {
        this.emailAddress = value.email_address;
      });

    localforage.getItem('step8Form').then((value: { zip_code: string }) => {
      this.zipCode = value.zip_code;
    });

    localforage.getItem('step9Form').then((value) => {
      if (value) this.step9Form.patchValue(value);
    });
  }

  get formControl() {
    return this.step9Form.controls;
  }

  gotoStep8() {
    this.gotoStepEvent.emit(8);
  }

  submitStep9() {
    this.submitted = true;
    if (this.step9Form.valid) {
      localforage.setItem('step9Form', this.step9Form.value).then(() => {
        this.gotoStepEvent.emit(10);
      });
    }
  }
}
