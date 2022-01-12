import { Component, Input } from '@angular/core';
import { Product } from 'src/data/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
})
export class CartListComponent {
  @Input() items: Product[]

  constructor(private cartService: CartService) {}

  removeItem(event: any) {
    this.cartService.removeItem(event)
  }
}
