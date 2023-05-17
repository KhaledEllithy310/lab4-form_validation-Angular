import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Products } from "../interfaces/products";

@Injectable({
  providedIn: "root",
})
export class NumberproductsService {
  private numberProductsCart = new BehaviorSubject(0);
  numberProductsCartVal = this.numberProductsCart;
  private cartBox = new BehaviorSubject<Products[]>([]);
  // private cartBox: Products[] = new BehaviorSubject();
  constructor() {}

  getNumberProducts() {
    return this.numberProductsCart.asObservable();
  }

  setNumberProducts(newVal: number) {
    this.numberProductsCart.next(newVal);
  }

  displayProductCart(productAdded: any) {
    this.cartBox.next(this.cartBox.value.concat(productAdded));
    console.log(this.cartBox.value);
  }
}
