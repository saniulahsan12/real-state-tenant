import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step4Component } from './step4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../common.service';



@NgModule({
  declarations: [Step4Component],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [CommonService],
  exports: [Step4Component],
})
export class Step4Module {}
