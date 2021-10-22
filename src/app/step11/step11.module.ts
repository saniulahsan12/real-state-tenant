import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step11Component } from './step11.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [Step11Component],
  imports: [CommonModule, HttpClientModule],
  exports: [Step11Component],
})
export class Step11Module {}
