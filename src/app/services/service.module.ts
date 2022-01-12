import { NgModule } from "@angular/core";
import { CartService } from "./cart.service";
import { ProductService } from "./product.service";

@NgModule({
  providers: [CartService, ProductService]
})
export class ServiceModule {}