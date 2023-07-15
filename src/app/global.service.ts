import { Injectable } from '@angular/core';
import { Business } from './models/model';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  
  business: Business = {} as Business;

  setBusiness(business: Business): void {
    this.business = business;
  }

  getBusiness(): Business {
    return this.business;
  }
}
