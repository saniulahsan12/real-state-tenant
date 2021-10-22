import { CommonService } from './../common.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step2Component } from './step2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [Step2Component],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [CommonService],
  exports: [Step2Component],
})
export class Step2Module {}
