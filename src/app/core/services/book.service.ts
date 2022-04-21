import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient
  ) { }

  getBooks(): Observable<Response> {
    const url = `assets/data/data.json`;
    return this.http.get<Response>(url);
  }
}
