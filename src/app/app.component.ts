import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SectionPrincipalComponent } from './components/section-principal/section-principal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,SectionPrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'e-commerce-page';

  quantity?: number;  // Variável para armazenar a quantidade

  // Método que captura o valor emitido pelo SectionPrincipalComponent
  onQuantityChange(quantity: number) {
    this.quantity = quantity;
  }
}
