import { Injectable } from "@angular/core";
import { Product } from "src/data/product";

Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = []

  getItems(): Product[] {
    return this.cart
  }

  addItem(product: Product): void {
    this.cart.push(product)
  }

  removeItem(product: Product): void {
    const position = this.cart.indexOf(product)
    this.cart.splice(position, 1)
  }

  clearItems(): void {
    this.cart.splice(0, this.cart.length)
  }
}