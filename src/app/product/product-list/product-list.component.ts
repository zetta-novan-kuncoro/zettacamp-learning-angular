import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from 'src/data/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  @Input() products!: Product[]
  @Output() addToCart: EventEmitter<Product> = new EventEmitter()
}
