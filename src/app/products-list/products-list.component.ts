import { Component, inject } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../products.service';
import { ICart } from '../store/cart.features';
import { CartService } from '../cart.service';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductComponent, FilterComponent],
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
