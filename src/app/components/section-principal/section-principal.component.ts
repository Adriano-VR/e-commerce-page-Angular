import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-section-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-principal.component.html',
  styleUrl: './section-principal.component.css'
})
export class SectionPrincipalComponent {

  constructor(private cartService: CartService) {}



  opcaoSelecionada = ''

  product = {
  id: 1,
  quantity: 0,
  name: "Fall Limited Edition Sneakers",
}

images = 'assets/images/image-product-1.jpg'
selectIndex = 1

aumentar() {
  this.product.quantity++;
}

diminuir() {
  if (this.product.quantity > 0) this.product.quantity--;
}

changeImage(foto:number){
  this.images = `assets/images/image-product-${foto}.jpg`

}

addToCart() {
  if (this.product.quantity > 0) {
    this.cartService.addProduct(this.product);
    // this.product.quantity = 0; // Optionally reset quantity after adding
  }
}
}
