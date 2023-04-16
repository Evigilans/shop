export interface IProduct {
  "id"?: number,
  "name": string,
  "description": string,
  "price": number,
  "category": Category,
  "isAvailable": boolean
}

export enum Category {
  "Men's clothes",
  "Women's clothes",
  "Unisex clothes",
}
