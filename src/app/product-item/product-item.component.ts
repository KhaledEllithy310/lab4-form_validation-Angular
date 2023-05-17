import { Router, RouterModule } from "@angular/router";
import { Component, Input } from "@angular/core";
import { Products } from "../interfaces/products";
import { NumberproductsService } from "../services/numberproducts.service";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"],
})
export class ProductItemComponent {
  @Input() productItem!: Products;
  numberProductsCart: number = 0;
  constructor(
    private Router: Router,
    private numberProductsService: NumberproductsService
  ) {}

  redirectDetails(id: number) {
    this.Router.navigate(["/ProductDetails", id]);
  }

  // addToCart() {
  //   // this.Router.navigate(["Cart"]);
  //   this.addToCart();
  // }

  addToCart() {
    this.numberProductsService.displayProductCart(this.productItem);
    this.numberProductsService.numberProductsCartVal.subscribe(
      (res) => (this.numberProductsCart = res)
    );
    this.numberProductsService.setNumberProducts(++this.numberProductsCart);
    // this.numberProductsService.displayProductCart()    
  }
}
