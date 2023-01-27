import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Calc } from '../models/Calc';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //criar os mesmos métodos
  //criar as mesmas classes de request e response

  constructor(private http: HttpClient) {}

  calc(value1: number, value2: number, operator: string): Observable<number> {
    return this.http.post<number>('https://localhost:7155/Calc', {
      value1: value1,
      value2: value2,
      operatorType: operator,
    });
  }

  getHistoric(): Observable<Calc[]> {
    return this.http.get<Calc[]>('https://localhost:7155/Calc/', httpOptions);
  }

  deleteHistoric(): Observable<object> {
    return this.http.delete<object>('https://localhost:7155/Calc/');
  }
}
