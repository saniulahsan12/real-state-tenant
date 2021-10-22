import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import * as localforage from 'localforage';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css'],
})
export class Step3Component implements OnInit {
  public step3Form: FormGroup;
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

    this.step3Form = this.formBuilder.group({
      property_use: ['', Validators.required],
    });

    this.step3Form.valueChanges.subscribe((value) => {
      this.activeClass = value.property_use;
    });

    localforage.getItem('step3Form').then((value) => {
      if (value) this.step3Form.patchValue(value);
    });
  }

  get formControl() {
    return this.step3Form.controls;
  }

  gotoStep2() {
    this.gotoStepEvent.emit(2);
  }

  submitStep3() {
    this.submitted = true;
    if (this.step3Form.valid) {
      localforage.setItem('step3Form', this.step3Form.value).then(()=>{
        this.gotoStepEvent.emit(4);
      });
    }
  }
}
