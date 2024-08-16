import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-menu',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './cart-menu.component.html',
  styleUrl: './cart-menu.component.scss'
})
export class CartMenuComponent {
  basketItems:any;
  TotalQuantity=0;

}
