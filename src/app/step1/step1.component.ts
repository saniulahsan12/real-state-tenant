import { CommonService } from './../common.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as localforage from 'localforage';


@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
})
export class Step1Component implements OnInit {
  public step1Form: FormGroup;
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

    this.step1Form = this.formBuilder.group({
      type_of_loan: ['', Validators.required],
    });

    this.step1Form.valueChanges.subscribe((value) => {
      this.activeClass = value.type_of_loan;
    });

    localforage.getItem('step1Form').then((value) => {
      if (value) this.step1Form.patchValue(value);
    });
  }

  get formControl() {
    return this.step1Form.controls;
  }

  submitStep1() {
    this.submitted = true;
    if (this.step1Form.valid) {
      localforage.setItem('step1Form', this.step1Form.value).then(()=>{
        this.gotoStepEvent.emit(2);
      });
    }
  }
}
