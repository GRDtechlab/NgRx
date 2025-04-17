import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { AuthComponent } from '../auth.component';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, AuthComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true,
})
export class NavbarComponent {
  cart = input(0);
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
