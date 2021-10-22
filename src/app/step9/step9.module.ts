import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step9Component } from './step9.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../common.service';



@NgModule({
  declarations: [Step9Component],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [CommonService],
  exports: [Step9Component],
})
export class Step9Module {}
