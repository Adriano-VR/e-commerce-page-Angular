import { Injectable } from '@angular/core';
import { Produto } from './interface/interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Produto[] = [];

  getCart(): Produto[] {
    return this.cart;
  }

  addProduct(product: Produto): void {
    const existingProduct = this.cart.find(item => item.id === product.id);

    if (existingProduct) {
      // Update quantity if the product already exists
      existingProduct.quantity += product.quantity;
    } else {
      // Add new product to cart
      this.cart.push({ ...product, quantity: product.quantity });
    }
  }

  delete(product: Produto): void {
    // Remove the product from the cart
    this.cart = this.cart.filter(item => item.id !== product.id);
  }
}
