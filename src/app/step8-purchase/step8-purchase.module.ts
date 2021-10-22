import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step8PurchaseComponent } from './step8-purchase.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../common.service';


@NgModule({
  declarations: [Step8PurchaseComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [CommonService],
  exports: [Step8PurchaseComponent],
})
export class Step8PurchaseModule {}
