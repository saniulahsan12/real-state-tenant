import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step3Component } from './step3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../common.service';
import { Step2Component } from '../step2/step2.component';



@NgModule({
  declarations: [Step3Component],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [CommonService],
  exports: [Step3Component],
})
export class Step3Module {}
