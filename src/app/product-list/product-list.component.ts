import { ProductsService } from "./../services/products.service";
import { Component } from "@angular/core";
import { Products } from "../interfaces/products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent {
  constructor(private productsService: ProductsService) {}
  products!: Products[];

  ngOnInit() {
    this.productsService
      .getProducts()
      .subscribe((res: any) => (this.products = res.products));
  }
}
