import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  serviceAPI = "";
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>(this.serviceAPI, httpOptions);
  }
}
