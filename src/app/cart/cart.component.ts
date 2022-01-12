import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  items = this.cartService.getItems()

  constructor(private cartService: CartService) { }
}
