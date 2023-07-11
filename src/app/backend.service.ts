import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private readonly API_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getBusinessInfo(): Observable<any> {
    return this.http.get(`${this.API_URL}/business`);
  }
}
