import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step10Component } from './step10.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../common.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [Step10Component],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [CommonService],
  exports: [Step10Component],
})
export class Step10Module {}
