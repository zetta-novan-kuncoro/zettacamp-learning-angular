import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './cart.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartClearComponent } from './cart-clear/cart-clear.component';

@NgModule({
  declarations: [
    CartComponent,
    CartListComponent,
    CartClearComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
