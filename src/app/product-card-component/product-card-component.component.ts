import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card-component.component.html',
  styleUrl: './product-card-component.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
}