import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  products = this.productService.getProducts()

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) { }

  onAddCartItem(event: any) {
    this.cartService.addItem(event)
  }

}
