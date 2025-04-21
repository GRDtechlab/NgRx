import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  getNextIndex(currentIndex: number, length: number): number {
    return (currentIndex + 1) % length;
  }

  getPrevIndex(currentIndex: number, length: number): number {
    return (currentIndex - 1 + length) % length;
  }

  startAutoSlide(
    interval: number,
    slideFunction: () => void,
    timer: any
  ): void {
    timer = setInterval(slideFunction, interval);
  }
}
