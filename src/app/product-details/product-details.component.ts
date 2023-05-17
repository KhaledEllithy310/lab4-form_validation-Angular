import { Products } from "./../interfaces/products";
import { ProductsService } from "./../services/products.service";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent {
  targetProduct!: any;
  products!: Products[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}

 
  ngOnInit() {
    this.productsService
      .getProductById(this.activatedRoute.snapshot.params["id"])
      .subscribe((product: any) => (this.targetProduct = product));
    // console.log(this.targetProduct);
  }
}
