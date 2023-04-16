import {Component, Input} from '@angular/core';
import {Category, IProduct} from "../../models/product";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: IProduct

  protected readonly Category = Category;

  constructor(private cartService: CartService) {
  }

  onAddToCart(product: IProduct) {
    console.log('Product added to cart')
    this.cartService.purchaseProduct(product);
  }
}
