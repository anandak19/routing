import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products= [
    {id: 1, productName: "Solid Casual Black Shirt", price: "₹ 1055.00", imageUrl:"../../assets/images/black.jpg"},
    {id: 2, productName: "Slim Fit Check Blue Shirt", price: "₹ 1099.00", imageUrl:"../../assets/images/blue-check.jpg"},
    {id: 3, productName: "Wrangler Men Solid Casual Blue Shirt", price: "₹ 2000.00", imageUrl:"../../assets/images/jeans-shirt.jpg"},
    {id: 4, productName: "Checkered Casual Black, Orange Shirt", price: "₹ 400.00", imageUrl:"../../assets/images/red-check.jpg"},
    {id: 5, productName: "Checkered Casual Shirt, White", price: "₹ 899.00", imageUrl:"../../assets/images/white-check.jpeg"}
  ]

}
