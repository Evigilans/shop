import {Injectable} from "@angular/core";
import {IProduct} from "../../models/product";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalSpentAmount$ = new BehaviorSubject<number>(0)
  items$ = new Subject<IProduct[]>()
  products$: IProduct[] = new Array<IProduct>()

  purchaseProduct(product: IProduct) {
    this.products$.push(product);
    this.items$.next(this.products$);
    this.totalSpentAmount$.next(this.totalSpentAmount$.value + product.price);
  }

  clear() {
    this.products$.length = 0;
    this.items$.next(new Array<IProduct>());
    this.totalSpentAmount$.next(0);
  }
}
