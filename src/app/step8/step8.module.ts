import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step8Component } from './step8.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../common.service';



@NgModule({
  declarations: [Step8Component],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [CommonService],
  exports: [Step8Component],
})
export class Step8Module {}
