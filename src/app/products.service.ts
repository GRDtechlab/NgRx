import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  loadProducts,
  selectLoading,
  selectProducts,
} from './store/products.features';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  store = inject(Store);
  product$ = this.store.select(selectProducts);
  loading$ = this.store.select(selectLoading);

  loading = toSignal(this.loading$);
  product = toSignal(this.product$);

  loadProductsDispatch() {
    this.store.dispatch(loadProducts());
  }
}
