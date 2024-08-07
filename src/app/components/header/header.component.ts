import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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


  borda(registroLower: string) {
    this.opcaoSelecionada = registroLower;
  }
}
