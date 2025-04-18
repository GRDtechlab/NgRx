import { Component, inject, WritableSignal } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-custom-toast',
  imports: [],
  templateUrl: './custom-toast.component.html',
  styleUrl: './custom-toast.component.css',
  standalone: true,
})
export class CustomToastComponent {
  toastService = inject(ToastService);
  message: WritableSignal<string | null> = this.toastService.getMessage();
}
