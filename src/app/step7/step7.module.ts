import { NgModule } from '@angular/core';
import { CommonService } from '../common.service';
import { CommonModule } from '@angular/common';
import { Step7Component } from './step7.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [Step7Component],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [CommonService],
  exports: [Step7Component],
})
export class Step7Module {}
