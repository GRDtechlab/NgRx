import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-landing',
  imports: [RouterLink, CarouselComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  standalone: true,
})
export class LandingComponent {
  slides = [
    'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
    'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  ];
}
