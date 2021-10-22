import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CommonService } from '../common.service';
import * as localforage from 'localforage';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-step7',
  templateUrl: './step7.component.html',
  styleUrls: ['./step7.component.css'],
})
export class Step7Component implements OnInit {
  public step7Form: FormGroup;
  @Output() gotoStepEvent = new EventEmitter<number>();

  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private http: HttpClient
  ) {}

  imageBase: string;
  activeClass: string;
  submitted: boolean = false;
  baseUrl: string = environment.api_base;
  loading: boolean = false;

  ngOnInit() {
    this.imageBase = this.commonService.getImageBase();

    this.step7Form = this.formBuilder.group({
      email_address: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required, this.validateUsaPhone]],
    });

    localforage.getItem('step7Form').then((value) => {
      if (value) this.step7Form.patchValue(value);
    });
  }

  validateUsaPhone(control: AbstractControl) {
    const isValidPhone =
      /^[\+]?([0-9][\s]?|[0-9]?)([(][0-9]{3}[)][\s]?|[0-9]{3}[-\s\.]?)[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (control.value && !isValidPhone.test(control.value)) {
      return { phone: true };
    }
    return null;
  }

  get formControl() {
    return this.step7Form.controls;
  }

  gotoStep6() {
    this.gotoStepEvent.emit(6);
  }

  async submitStep7() {
    this.submitted = true;

    if (this.step7Form.valid) {
      this.loading = true;
      localforage.setItem('step7Form', this.step7Form.value).then(async () => {
        const step1Form: any = await localforage.getItem('step1Form');
        const step6Form: any = await localforage.getItem('step6Form');
        const step7Form: any = await localforage.getItem('step7Form');

        const customerInfo = {
          ...step1Form,
          ...step6Form,
          ...step7Form,
        };

        this.http
          .post<any>(
            this.baseUrl + '/wp-json/real-state-tenant-survey/send-email',
            customerInfo
          )
          .subscribe(
            (data) => {
              this.gotoStepEvent.emit(8);
              this.loading = false;
            }
          );
      });
    }
  }
}
