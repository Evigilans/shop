import {IProduct} from "../models/product";

export const products: IProduct[] = [
  {
    "id": 1,
    "name": "Product #1",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "price": 111.22,
    "category": "men",
    "isAvailable": true
  },
  {
    "id": 2,
    "name": "Product #2",
    "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    "price": 222.33,
    "category": "women",
    "isAvailable": false
  }
]
