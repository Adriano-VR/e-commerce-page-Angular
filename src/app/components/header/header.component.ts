import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  opcoes : string[] = ['Collections', 'Men' , 'Women' , 'About' , 'Contact'];
  opcaoSelecionada = "";

  constructor(private cartService: CartService) {}


  borda(registroLower: string) {
    this.opcaoSelecionada = registroLower;
  }

  modalVisible = false;

  toggleModal() {
    this.modalVisible = !this.modalVisible;
  }

  hideModal() {
    this.modalVisible = false;
  }

  addToCart(product: any) {
    this.cartService.addProduct(product);
  }

  getCart() {
    return this.cartService.getCart();
  }

}
