import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/models';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getComments(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data.json');
  }
}
