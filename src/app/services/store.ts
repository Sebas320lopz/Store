import { Injectable } from '@angular/core';
import { Product as ProductModel } from '../../models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Store {
  private myShoppingCart: ProductModel[] = [];
  private myCar = new BehaviorSubject<ProductModel[]>([]);

  myCart$ = this.myCar.asObservable();

  getShoppingCart(): ProductModel[] {
    return this.myShoppingCart;
  }

  addProduct(product: ProductModel) {
    this.myShoppingCart.push(product);
    this.myCar.next(this.myShoppingCart);
  }
  getTotalPrice(): number {
    return this.myShoppingCart.reduce((total, product) => total + product.price, 0);
  }
}
