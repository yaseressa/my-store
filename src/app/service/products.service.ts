import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/models';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getComments(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }
  showComment(id: number) {
    return this.http.get<Product[]>(`http://localhost:3000/products?id=${id}`);
  }
}
