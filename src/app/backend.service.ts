import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { GlobalService } from './global.service';
import { Business } from './models/model';

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
}
