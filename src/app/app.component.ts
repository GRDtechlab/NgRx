import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { AuthService } from './auth.service';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, ProductsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  auth = inject(AuthService);
  cartService = inject(CartService);

  isLoggedIn = this.auth.isLoggedIn;
  cart = this.cartService.cart;
}
