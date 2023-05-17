import { Component } from "@angular/core";
import { NumberproductsService } from "../services/numberproducts.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  numberProductCart: Number = 0;
  color: any = "red";
  constructor(private numberProductsService: NumberproductsService) {}

  ngOnInit() {
    this.numberProductsService
      .getNumberProducts()
      .subscribe((res) => (this.numberProductCart = res));
  }
}
