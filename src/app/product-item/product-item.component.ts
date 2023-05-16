import { Router, RouterModule } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Products } from '../interfaces/products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() productItem!: Products;

  constructor(private Router: Router) {}
  redirectDetails(id: number) {
    this.Router.navigate(['ProductDetails', id]);
  }
  redirectCart() {
    this.Router.navigate(['Cart']);
  }
}
