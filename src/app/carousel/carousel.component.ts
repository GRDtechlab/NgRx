import { NgFor } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { CarouselService } from './carousel.service';

@Component({
  selector: 'app-carousel',
  imports: [NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  standalone: true,
})
export class CarouselComponent {
  @Input() slides: string[] = [];
  @Input() interval: number = 3000; // Time in ms

  currentIndex: number = 0;
  private timer!: any;

  constructor(private carouselService: CarouselService) {}

  ngOnInit() {
    this.startAutoSlide();
  }

  nextSlide() {
    this.resetTimer(); // Reset auto-slide timer
    this.currentIndex = this.carouselService.getNextIndex(
      this.currentIndex,
      this.slides.length
    );
  }

  prevSlide() {
    this.resetTimer(); // Reset auto-slide timer
    this.currentIndex = this.carouselService.getPrevIndex(
      this.currentIndex,
      this.slides.length
    );
  }

  goToSlide(index: number) {
    this.resetTimer(); // Reset auto-slide timer
    this.currentIndex = index;
  }

  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  resetTimer() {
    this.clearTimer();
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.clearTimer();
    this.timer = setInterval(() => this.nextSlide(), this.interval);
  }
  handleInteraction(action: () => void) {
    this.resetTimer(); // Reset auto-slide timer
    action(); // Execute the desired action
    console.log(action);
  }
}
