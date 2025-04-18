import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './auth.service';
import { CartService } from './cart.service';
import { LandingComponent } from './landing/landing.component';
import { CustomToastComponent } from './custom-toast/custom-toast.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CustomToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  auth = inject(AuthService);
  cartService = inject(CartService);

  isLoggedIn = this.auth.isLoggedIn;
  cart = this.cartService.cart;
}
