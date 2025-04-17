import { Component, computed, input, output } from '@angular/core';
import { products } from '../store/products.features';
import { StarComponent } from '../star/star.component';
import { ICart } from '../store/cart.features';

@Component({
  selector: 'app-product',
  imports: [StarComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  standalone: true,
})
export class ProductComponent {
  product = input.required<products>();
  addToCartEvent = output<ICart>();

  line_product = computed(() => this.product());

  addToCart(product: products, quantity: number) {
    this.addToCartEvent.emit({ ...product, quantity: quantity });
  }
}
