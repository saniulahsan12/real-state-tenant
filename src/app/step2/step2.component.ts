import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import * as localforage from 'localforage';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css'],
})
export class Step2Component implements OnInit {
  public step2Form: FormGroup;
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

    this.step2Form = this.formBuilder.group({
      home_description: ['', Validators.required],
    });

    this.step2Form.valueChanges.subscribe((value) => {
      this.activeClass = value.home_description;
    });

    localforage.getItem('step2Form').then((value) => {
      if (value) this.step2Form.patchValue(value);
    });
  }

  get formControl() {
    return this.step2Form.controls;
  }

  gotoStep1() {
    this.gotoStepEvent.emit(1);
  }

  submitStep2() {
    this.submitted = true;
    if (this.step2Form.valid) {
      localforage.setItem('step2Form', this.step2Form.value).then(()=>{
        this.gotoStepEvent.emit(3);
      });
    }
  }
}
