import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product as ProductModel } from '../../models/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Products {

  constructor(private http : HttpClient) { }

  getAllProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>('https://fakestoreapi.com/products');
  }
}
