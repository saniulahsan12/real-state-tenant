import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../common.service';
import { Step10PurchaseComponent } from './step10-purchase.component';



@NgModule({
  declarations: [Step10PurchaseComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [CommonService],
  exports: [Step10PurchaseComponent],
})
export class Step10PurchaseModule {}
