import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { GlobalService } from './global.service';
import { Business, PriceConfig, Property, UpdateOpenDays } from './models/model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private readonly API_URL = 'http://localhost:8080';

  constructor(private http: HttpClient, private globalService: GlobalService) { }

  getBusinessInfo(): Observable<Business> {
    return this.http.get<Business>(`${this.API_URL}/business`).pipe(
      tap((business: Business) => {
        business.business_name ="ejemplo"
        this.globalService.setBusiness(business);
      })
    );
  }

  
  updateBusiness(business: Business): Observable<Business> {
    const url = `${this.API_URL}/business`;
    return this.http.put<Business>(url, business);
  }

  updateProperty(business_id: string, property: Property): Observable<Property> {
    const url = `${this.API_URL}/properties?business_id=${business_id}`;
    return this.http.put<Property>(url, property);
  }

  createProperty(business_id: string, property: Property): Observable<Property> {
    const url = `${this.API_URL}/properties?business_id=${business_id}`;
    return this.http.post<Property>(url, property);
  }

  updateOpenDays(business_id: string, property_id: string, action: string, days: Date[]): Observable<Property> {
    const url = `${this.API_URL}/open_days?business_id=${business_id}&property_id=${property_id}`;
    
    const formattedDates: string[] = [];
      
    for (const day of days) {
      const formattedDate = day.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      });
      
      formattedDates.push(formattedDate);
    }

    const updateOpenDays: UpdateOpenDays ={
      action: action,
      days: formattedDates
    }
    return this.http.put<Business>(url, updateOpenDays);
  }
}
