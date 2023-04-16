import {Component, Input} from '@angular/core';
import {Category, IProduct} from "../../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: IProduct

  onAddToCart() {
    console.log('Product added to cart')
  }

  protected readonly Category = Category;
}
