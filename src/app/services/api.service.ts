import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  userData = new BehaviorSubject({})// to store data which is using another component
  
  constructor(private http: HttpClient) { }

  getDetails() {
    return this.http.get('./assets/config.json');
  }
}
