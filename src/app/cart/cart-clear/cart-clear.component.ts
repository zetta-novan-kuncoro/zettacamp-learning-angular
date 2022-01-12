import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-clear',
  template: '<button class="btn btn-danger" (click)="onClear()">Clear Cart</button>',
})
export class CartClearComponent {
  constructor(private cartService: CartService) {}

  onClear(): void {
    this.cartService.clearItems()
  }
}
