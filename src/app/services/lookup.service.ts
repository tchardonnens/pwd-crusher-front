import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lookup } from '../models/lookup.model';

@Injectable({
  providedIn: 'root'
})
export class LookupService {
  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:3000/');

  constructor(
    private http: HttpClient
  ) { }


  getClear(hash: string): Observable<Lookup> {
    return this.http.post<Lookup>('http://localhost:3000/lookup/',
      {
        "hash": hash
      },
      {
        'headers': this.headers, 'responseType': 'json'
      });
  }
}
