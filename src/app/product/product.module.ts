import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ProductComponent]
})
export class ProductModule { }
