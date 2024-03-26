import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-p1',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterOutlet],
  templateUrl: './p1.component.html',
  styleUrl: './p1.component.scss'
})
export class P1Component {
 
  static products = [
    {
      id: 1,
      name: "MacBook Pro",
      price: 1999.99,
      rating: 4.5,
      brand: "Apple"
    },
    {
      id: 2,
      name: "Galaxy S21",
      price: 899.99,
      rating: 4.3,
      brand: "Samsung"
    },
    {
      id: 3,
      name: "Bose QuietComfort 35 II",
      price: 349.99,
      rating: 4.7,
      brand: "Bose"
    },
    {
      id: 4,
      name: "Sony A7 III",
      price: 1999.99,
      rating: 4.8,
      brand: "Sony"
    },
    {
      id: 5,
      name: "Toyota Camry",
      price: 24999.99,
      rating: 4.6,
      brand: "Toyota"
    },
    {
      id: 6,
      name: "Nike Air Force 1",
      price: 99.99,
      rating: 4.9,
      brand: "Nike"
    },
    {
      id: 7,
      name: "Canon EOS Rebel T7",
      price: 499.99,
      rating: 4.4,
      brand: "Canon"
    },
    {
      id: 8,
      name: "LG OLED C1",
      price: 1799.99,
      rating: 4.8,
      brand: "LG"
    },
    {
      id: 9,
      name: "Fitbit Versa 3",
      price: 229.99,
      rating: 4.2,
      brand: "Fitbit"
    },
    {
      id: 10,
      name: "Dell XPS 13",
      price: 1199.99,
      rating: 4.7,
      brand: "Dell"
    }
  ];


  getProducts() {
    return P1Component.products;
  }



}
