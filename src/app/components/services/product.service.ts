import {Injectable} from "@angular/core";
import {products as data} from "../../data/products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts() {
    return data;
  }
}
