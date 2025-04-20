import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import {
  addToCart_action,
  ICart,
  selectCartItems,
  selectTotalAmount,
} from './store/cart.features';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private store = inject(Store);
  private cart$ = this.store.select(selectCartItems);
  cart = toSignal(this.cart$, { initialValue: [] });

  private totalAmount$ = this.store
    .select(selectTotalAmount)
    .pipe(map((totalAmount) => Math.round(totalAmount)));
  totalAmount = toSignal(this.totalAmount$, { initialValue: 0 });

  addToCartDispatcher(cartProduct: ICart) {
    this.store.dispatch(addToCart_action({ product: { ...cartProduct } }));
  }
}
