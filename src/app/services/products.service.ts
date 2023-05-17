import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  
  getProducts() {
    return this.http.get("https://dummyjson.com/products");
  }

  getProductById(id: number) {
    return this.http.get("https://dummyjson.com/products/" + id);
  }


}
