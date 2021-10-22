import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import * as localforage from 'localforage';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.css'],
})
export class Step5Component implements OnInit {
  public step5Form: FormGroup;
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

    this.step5Form = this.formBuilder.group({
      second_mortage: ['', Validators.required],
    });

    this.step5Form.valueChanges.subscribe((value) => {
      this.activeClass = value.second_mortage;
    });

    localforage.getItem('step5Form').then((value) => {
      if (value) this.step5Form.patchValue(value);
    });
  }

  get formControl() {
    return this.step5Form.controls;
  }

  gotoStep4() {
    this.gotoStepEvent.emit(4);
  }

  submitStep5() {
    this.submitted = true;
    if (this.step5Form.valid) {
      localforage.setItem('step5Form', this.step5Form.value).then(()=>{
        this.gotoStepEvent.emit(6);
      });
    }
  }
}
