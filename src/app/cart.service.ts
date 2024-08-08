import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  getCart() {
    return this.cart;
  }

  addProduct(product: any) {
    const existingProduct = this.cart.find(item => item.id === product.id);

    if (existingProduct) {
      // Update quantity if the product already exists
      existingProduct.quantity += product.quantity;
    } else {
      // Add new product to cart
      this.cart.push({ ...product, quantity: product.quantity });
    }
  }
}
