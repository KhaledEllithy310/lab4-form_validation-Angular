import { ProductsService } from "./../services/products.service";

import { Component } from "@angular/core";
import { Products } from "../interfaces/products";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent {
  // cartBox!: Products[];
  targetProduct!: any;

  products!: Products[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}
  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params["id"]);
    this.targetProduct = this.products.find(
      (product) => product.id == this.activatedRoute.snapshot.params["id"]
    );

    this.productsService
      .getProducts()
      .subscribe((res: any) => (this.products = res.products));
    // this.cartBox.push(this.targetProduct);
    // console.log(this.cartBox);
  }
}
