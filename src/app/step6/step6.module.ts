import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step6Component } from './step6.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../common.service';



@NgModule({
  declarations: [Step6Component],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [CommonService],
  exports: [Step6Component],
})
export class Step6Module {}
