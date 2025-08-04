import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product as ProductModel } from '../../../models/product';
import { Img } from "../img/img";
import { CurrencyPipe } from '@angular/common';
import { Highlight } from '../../directives/highlight';
@Component({
  selector: 'app-product',
  imports: [Img, CurrencyPipe, Highlight],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product {
  @Input() product : ProductModel ={
    id: '',
    price: 0,
    image: '',
    title: '',
    category: '',
    description: '',
    
  };
  @Output() addedProduct = new EventEmitter<ProductModel>();
  constructor() {
    console.log('Product component initialized');
  }

  addToCart() {
    this.addedProduct.emit(this.product);
  }
}
