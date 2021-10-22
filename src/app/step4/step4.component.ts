import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import * as localforage from 'localforage';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css'],
})
export class Step4Component implements OnInit {
  public step4Form: FormGroup;
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

    this.step4Form = this.formBuilder.group({
      credit_profile: ['', Validators.required],
    });

    this.step4Form.valueChanges.subscribe((value) => {
      this.activeClass = value.credit_profile;
    });

    localforage.getItem('step4Form').then((value) => {
      if (value) this.step4Form.patchValue(value);
    });
  }

  get formControl() {
    return this.step4Form.controls;
  }

  gotoStep3() {
    this.gotoStepEvent.emit(3);
  }

  submitStep4() {
    this.submitted = true;
    if (this.step4Form.valid) {
      localforage.setItem('step4Form', this.step4Form.value).then(()=>{
        this.gotoStepEvent.emit(5);
      });
    }
  }
}
