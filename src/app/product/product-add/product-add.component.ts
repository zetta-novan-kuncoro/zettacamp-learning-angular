import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
})
export class ProductAddComponent {
  newProductForm = this.formBuilder.group({
    id: Math.round(Math.random() * 2000000),
    name: '',
    price: ''
  })

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) { }

  onSubmit(): void {
    this.productService.addProduct(this.newProductForm.value)
    this.newProductForm.reset()
  }
}
