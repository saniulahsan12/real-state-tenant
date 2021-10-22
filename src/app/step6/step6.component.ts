import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import * as localforage from 'localforage';

@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.css'],
})
export class Step6Component implements OnInit {
  public step6Form: FormGroup;
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

    this.step6Form = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
    });

    localforage.getItem('step6Form').then((value) => {
      if (value) this.step6Form.patchValue(value);
    });
  }

  get formControl() {
    return this.step6Form.controls;
  }

  gotoStep5() {
    this.gotoStepEvent.emit(5);
  }

  submitStep6() {
    this.submitted = true;
    if (this.step6Form.valid) {
      localforage.setItem('step6Form', this.step6Form.value).then(()=>{
        this.gotoStepEvent.emit(7);
      });
    }
  }
}
