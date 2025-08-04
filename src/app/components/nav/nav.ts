import { Component } from '@angular/core';
import { Store } from '../../services/store';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {
showMenu: boolean = false;
counter: number = 0;

constructor(private store: Store) {}

ngOnInit() {
  this.store.myCart$.subscribe(cart => {
    this.counter = cart.length;
  })
}
toggleMenu() {
  this.showMenu = !this.showMenu; 
}

}
