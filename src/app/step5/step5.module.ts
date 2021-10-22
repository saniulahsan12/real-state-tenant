import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step5Component } from './step5.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../common.service';


@NgModule({
  declarations: [Step5Component],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [CommonService],
  exports: [Step5Component],
})
export class Step5Module {}
