import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponentComponent } from '../product-detail-component/product-detail-component.component';


@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports: [ProductDetailComponentComponent, CommonModule],
  templateUrl: './product-list-component.component.html',
  styleUrl: './product-list-component.component.css'
})
export class ProductListComponentComponent {
  products = [
    { name: 'Laptop', price: 1200, description: 'Powerful gaming laptop' },
    { name: 'Smartphone', price: 800, description: 'Latest model with OLED display' },
    { name: 'Headphones', price: 150, description: 'Noise-cancelling wireless headphones' },
    { name: 'Smartwatch', price: 200, description: 'Tracks your fitness and notifications' },
    { name: 'Tablet', price: 500, description: 'Perfect for reading and media consumption' }
  ];

  selectedProduct = null;

  selectProduct(product: any) {
    this.selectedProduct = product;
  }
}
