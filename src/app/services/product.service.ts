import { Injectable } from "@angular/core";
import { Product, products } from "src/data/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [...products]

  getProducts(): Product[] {
    return this.products
  }

  addProduct(product: Product): void {
    this.products.push(product)
  }
}