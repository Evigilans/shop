import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../models/product";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productsService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}
