import {Component} from '@angular/core';
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  constructor(public cartService: CartService) {

  }
}
