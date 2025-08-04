import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { Product as ProductModel } from '../../../models/product';
import { CommonModule } from '@angular/common';   
import { Store } from '../../services/store';
import { Products as httpProducts } from '../../services/products';
import { CurrencyPipe } from '@angular/common';
import { TimeAgoPipe } from "../../pipes/time-ago-pipe";


@Component({
  selector: 'app-products',
  imports: [Product, CommonModule, CurrencyPipe, TimeAgoPipe],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {
  myShoppingCart: ProductModel[] = [];
  totalPrice: number = 0;
 products: ProductModel[] = [];
today: Date = new Date();
date  = new Date(2021,1,21);
  constructor(private store: Store,
              private productsService: httpProducts
  ) {
    
  }
  addToCart(product: ProductModel) {
    this.store.addProduct(product);
    this.totalPrice = this.store.getTotalPrice();
    this.myShoppingCart = this.store.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });
  }


}
