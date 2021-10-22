import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as localforage from 'localforage';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-step11',
  templateUrl: './step11.component.html',
  styleUrls: ['./step11.component.css'],
})
export class Step11Component implements OnInit {
  customerInfo: any = {};
  loading: boolean = false;
  baseUrl: string = environment.api_base;
  thankYouContent: any[] = [];

  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    await this.loadcustomerInfo();
    await this.loadThankYouPage();
  }

  async loadThankYouPage() {
    this.loading = true;
    this.http
      .get<any>(this.baseUrl + '/wp-json/real-state-tenant-survey/thank-you')
      .subscribe((data) => {
        this.thankYouContent = data;
        this.loading = false;
      });
  }

  async loadcustomerInfo() {
    const step1Form: any = await localforage.getItem('step1Form');
    const step2Form: any = await localforage.getItem('step2Form');
    const step3Form: any = await localforage.getItem('step3Form');
    const step4Form: any = await localforage.getItem('step4Form');
    const step5Form: any = await localforage.getItem('step5Form');
    const step6Form: any = await localforage.getItem('step6Form');
    const step7Form: any = await localforage.getItem('step7Form');
    const step8Form: any = await localforage.getItem('step8Form');
    const step9Form: any = await localforage.getItem('step9Form');
    const step10Form: any = await localforage.getItem('step10Form');

    this.customerInfo = {
      ...step1Form,
      ...step2Form,
      ...step3Form,
      ...step4Form,
      ...step5Form,
      ...step6Form,
      ...step7Form,
      ...step8Form,
      ...step9Form,
      ...step10Form,
    };

    localforage
      .clear()
      .then(function () {
        
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}
