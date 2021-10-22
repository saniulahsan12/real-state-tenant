import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step9PurchaseComponent } from './step9-purchase.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../common.service';


@NgModule({
  declarations: [Step9PurchaseComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [CommonService],
  exports: [Step9PurchaseComponent],
})
export class Step9PurchaseModule {}
