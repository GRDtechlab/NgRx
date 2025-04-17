import { Component, input } from '@angular/core';

@Component({
  selector: 'app-star',
  imports: [],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css',
  standalone: true,
})
export class StarComponent {
  rating = input(0);
  maxStars: number = 5;
  getStars() {
    const stars = [];
    for (let i = 1; i <= this.maxStars; i++) {
      stars.push(i <= this.rating() ? 'full' : 'empty');
    }
    return stars;
  }
}
