import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastMessage = signal<string | null>('');

  showToast(message: string): void {
    this.toastMessage.set(message);
    // Automatically hide the toast after 3 seconds
    setTimeout(() => {
      this.toastMessage.set(null);
    }, 3000);
  }

  getMessage() {
    return this.toastMessage;
  }
}
