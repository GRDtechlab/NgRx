import { Component, effect, inject } from '@angular/core';
import { CartService } from '../cart.service';
import { ToastService } from '../custom-toast/toast.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  standalone: true,
})
export class CartComponent {
  cartService = inject(CartService);
  toast = inject(ToastService);

  cartList = this.cartService.cart;
  totalAmount = this.cartService.totalAmount;

  notify = effect(() => {
    if (this.cartList().length <= 0) {
      this.toast.showToast('Cart is Empty! Please add products..');
    }
  });
}
