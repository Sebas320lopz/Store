import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Products } from "./components/products/products";
import { Nav } from "./components/nav/nav";
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [FormsModule, CommonModule, Products, Nav, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'my-store';

  showImage: boolean = true;

 
  imageParent: string = '';
  OnLoaded(imgUrl: string) {
    console.log('Log Padre; imgUrl: ', imgUrl);
  }
  toggleImage() {
    this.showImage = !this.showImage;
    console.log('Toggle image: ', this.showImage);
  }
}
