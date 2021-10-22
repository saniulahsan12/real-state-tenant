import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as localforage from 'localforage';
import { environment } from 'src/environments/environment';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-step10-purchase',
  templateUrl: './step10-purchase.component.html',
  styleUrls: ['./step10-purchase.component.css'],
})
export class Step10PurchaseComponent implements OnInit {
  public step10Form: FormGroup;
  @Output() gotoStepEvent = new EventEmitter<number>();

  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private http: HttpClient
  ) {}

  imageBase: string;
  activeClass: string;
  submitted: boolean = false;
  loading: boolean = false;
  zipCode: string;
  firstName: string;
  lastName: string;
  cityState: string;
  streetAddress: string;
  emailAddress: string;
  phoneNumber: string;
  baseUrl: string = environment.api_base;

  ngOnInit() {
    this.imageBase = this.commonService.getImageBase();

    this.step10Form = this.formBuilder.group({
      military: ['no', [Validators.required]],
      agent_contact: ['no', [Validators.required]],
    });

    localforage
      .getItem('step6Form')
      .then((value: { first_name: string; last_name: string }) => {
        this.firstName = value.first_name;
        this.lastName = value.last_name;
      });

    localforage
      .getItem('step7Form')
      .then((value: { email_address: string; phone_number: string }) => {
        this.emailAddress = value.email_address;
        this.phoneNumber = value.phone_number;
      });

    localforage.getItem('step8Form').then((value: { zip_code: string }) => {
      this.zipCode = value.zip_code;
    });

    localforage
      .getItem('step9Form')
      .then((value: { city_state: string; mailing_address: string }) => {
        this.cityState = value.city_state;
        this.streetAddress = value.mailing_address;
      });

    localforage.getItem('step10Form').then((value) => {
      if (value) this.step10Form.patchValue(value);
    });
  }

  get formControl() {
    return this.step10Form.controls;
  }

  gotoStep9() {
    this.gotoStepEvent.emit(9);
  }

  async submitStep10() {
    this.submitted = true;

    if (this.step10Form.valid) {
      this.loading = true;
      localforage
        .setItem('step10Form', this.step10Form.value)
        .then(async () => {
          const step1Form: any = await localforage.getItem('step1Form');
          const step2Form: any = await localforage.getItem('step2Form');
          const step3Form: any = await localforage.getItem('step3Form');
          const step4Form: any = await localforage.getItem('step4Form');
          const step5Form: any = await localforage.getItem('step5Form');
          const step6Form: any = await localforage.getItem('step6Form');
          const step7Form: any = await localforage.getItem('step7Form');
          const step8Form: any = await localforage.getItem('step8Form');
          const step9Form: any = await localforage.getItem('step9Form');
          const step10Form: any = await localforage.getItem('step10Form');

          const customerInfo = {
            ...step1Form,
            ...step2Form,
            ...step3Form,
            ...step4Form,
            ...step5Form,
            ...step6Form,
            ...step7Form,
            ...step8Form,
            ...step9Form,
            ...step10Form,
          };

          this.http
            .post<any>(
              this.baseUrl + '/wp-json/real-state-tenant-survey/send-email',
              customerInfo
            )
            .subscribe((data) => {
              this.gotoStepEvent.emit(11);
              this.loading = false;
            });
        });
    }
  }
}
