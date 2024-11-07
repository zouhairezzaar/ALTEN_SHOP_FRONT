import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from 'app/cart/data-access/cart.service';
import { Product } from 'app/products/data-access/product.model';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [CommonModule, DataViewModule, CardModule, FormsModule]
})
export class CartComponent implements OnInit {
  cartItems: { product: Product; quantity: number }[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity < 1) {
        quantity = 1;
    }
    this.cartService.updateQuantity(productId, quantity);
}
}