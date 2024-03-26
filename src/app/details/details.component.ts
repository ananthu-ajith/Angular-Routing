import { Component } from '@angular/core';
import { P1Component } from '../p1/p1.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [P1Component,CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {


  product: any; 

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve the product ID from route parameters
    this.route.params.subscribe(params => {
      const productId = +params['id']; // Convert the ID to a number
      // Find the product in the products array by ID
      this.product = P1Component.products.find(product => product.id === productId);
    });
  }

}


