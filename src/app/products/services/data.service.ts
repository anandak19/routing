import { Injectable } from '@angular/core';
export interface products{
  id: number;
  productName: string;
  price: string;
  imageUrl: string
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  products: products[] = [
    {id: 1, productName: "Solid Casual Black Shirt", price: "₹ 1055.00", imageUrl:"assets/images/black"},
    {id: 2, productName: "Slim Fit Check Blue Shirt", price: "₹ 1099.00", imageUrl:"assets/images/blue-check"},
    {id: 3, productName: "Wrangler Men Solid Casual Blue Shirt", price: "₹ 2000.00", imageUrl:"assets/images/jeans-shirt"},
    {id: 4, productName: "Checkered Casual Black, Orange Shirt", price: "₹ 400.00", imageUrl:"assets/images/red-check"},
    {id: 5, productName: "Checkered Casual Shirt, White", price: "₹ 899.00", imageUrl:"assets/images/white-check"}
  ]

  constructor() { }
  getProductById(id: number){
    return this.products.find(item => item.id === id)
  }
}
