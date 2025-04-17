import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  loadProducts,
  selectLoading,
  selectProducts,
} from '../store/products.features';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../products.service';
import { ICart } from '../store/cart.features';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products-list',
  imports: [ProductComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
  standalone: true,
})
export class ProductsListComponent {
  productStore = inject(ProductsService);
  cart = inject(CartService);
  loading = this.productStore.loading;
  products = this.productStore.product;

  ngOnInit() {
    this.productStore.loadProductsDispatch();
  }

  addToCart(cartProduct: ICart) {
    this.cart.addToCartDispatcher(cartProduct);
  }
}
