import { Step11Module } from './step11/step11.module';
import { Step10Module } from './step10/step10.module';
import { Step9Module } from './step9/step9.module';
import { Step8PurchaseModule } from './step8-purchase/step8-purchase.module';
import { Step9PurchaseModule } from './step9-purchase/step9-purchase.module';
import { Step10PurchaseModule } from './step10-purchase/step10-purchase.module';
import { Step8Module } from './step8/step8.module';
import { Step7Module } from './step7/step7.module';
import { Step6Module } from './step6/step6.module';
import { Step5Module } from './step5/step5.module';
import { Step4Module } from './step4/step4.module';
import { Step3Module } from './step3/step3.module';
import { Step2Module } from './step2/step2.module';
import { Step1Module } from './step1/step1.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from './common.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    Step1Module,
    Step2Module,
    Step3Module,
    Step4Module,
    Step5Module,
    Step6Module,
    Step7Module,
    Step8Module,
    Step8PurchaseModule,
    Step9PurchaseModule,
    Step10PurchaseModule,
    Step9Module,
    Step10Module,
    Step11Module,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
