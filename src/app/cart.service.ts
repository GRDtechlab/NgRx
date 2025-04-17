import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import {
  addToCart_action,
  ICart,
  selectCartItems,
} from './store/cart.features';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private store = inject(Store);
  private cart$ = this.store
    .select(selectCartItems)
    .pipe(map((cart) => cart.length));
  cart = toSignal(this.cart$, { initialValue: 0 });

  addToCartDispatcher(cartProduct: ICart) {
    this.store.dispatch(addToCart_action({ product: { ...cartProduct } }));
  }
}
