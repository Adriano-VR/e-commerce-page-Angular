import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CartService } from '../../cart.service';
import { Produto } from '../../interface/interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  opcoes: string[] = ['Collections', 'Men', 'Women', 'About', 'Contact'];
  opcaoSelecionada = '';
  modalVisible = false;
  cartItems: Produto[] = [];

  @Input() receivedData?: number;

  constructor(private cartService: CartService) {
    this.loadCart();
  }

  borda(registroLower: string) {
    this.opcaoSelecionada = registroLower;
  }

  toggleModal() {
    this.modalVisible = !this.modalVisible;
  }

  hideModal() {
    this.modalVisible = false;
  }

  loadCart() {
    this.cartItems = this.cartService.getCart();
    this.receivedData = undefined
  }

  deleteProduct(productId: number) {
    const productToDelete = this.cartItems.find(item => item.id === productId);
    if (productToDelete) {
      this.cartService.delete(productToDelete);
      this.loadCart(); // Refresh the cart items after deletion
    }
  }
}
