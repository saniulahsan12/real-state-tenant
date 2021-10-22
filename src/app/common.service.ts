import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  getImageBase() {
    if (!window.location.origin.includes('4200')) {
      return (
        window.location.origin +
        // '/' +
        // window.location.pathname.split('/')[1] +
        '/' +
        'wp-content/plugins/real-state-tenant-survey/src/assets/images'
      );
    } else {
      return (
        window.location.origin +
        window.location.pathname.split('/')[1] +
        '/' +
        'assets/images'
      );
    }
  }

  
}
