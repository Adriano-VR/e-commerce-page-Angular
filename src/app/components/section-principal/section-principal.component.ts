import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from '../../cart.service';
import { Produto } from '../../interface/interface';

@Component({
  selector: 'app-section-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-principal.component.html',
  styleUrl: './section-principal.component.css'
})
export class SectionPrincipalComponent {
  @Output() dataEmitter = new EventEmitter<number>();

  constructor(private cartService: CartService) {}

  opcaoSelecionada = '';

  product:Produto = {
    id: 1,
    quantity: 0,
    name: 'Fall Limited Edition Sneakers',
    img: 'assets/images/image-product-1-thumbnail.jpg',
    price: 125.00
  };

  images = 'assets/images/image-product-1.jpg';
  selectIndex = 1;

  aumentar() {
    this.product.quantity += 1; // Aumenta a quantidade em 1
  }
  diminuir() {
    if (this.product.quantity > 0) {
      this.product.quantity -= 1; // Diminui a quantidade em 1, mas apenas se for maior que 0
    }
  }

  changeImage(foto: number) {
    this.images = `assets/images/image-product-${foto}.jpg`;
  }

  addToCart() {
    if (this.product.quantity > 0) {
      this.cartService.addProduct(this.product);

      this.dataEmitter.emit(this.product.quantity); // Emite o valor atualizado
      this.product.quantity = 0
    }
  }
}
