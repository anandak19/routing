import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent implements OnInit{
  productId? : number;
  products?: any;

  Products = [
    {id: 1, productName: "Solid Casual Black Shirt", price: "₹ 1055.00"},
    {id: 2, productName: "Slim Fit Check Blue Shirt", price: "₹ 1099.00"},
    {id: 3, productName: "Wrangler Men Solid Casual Blue Shirt", price: "₹ 2000.00"},
    {id: 4, productName: "Checkered Casual Black, Orange Shirt", price: "₹ 400.00"},
    {id: 5, productName: "Checkered Casual Shirt, White", price: "₹ 899.00"}
  ];

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    this.productId = +this.route.snapshot.paramMap.get('id')!;
    this.products = this.dataService.getProductById(this.productId)
  }
} 
