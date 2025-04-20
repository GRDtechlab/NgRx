import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { canActivateCartGuard } from './guards/route-guards';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  {
    path: 'product-list',
    component: ProductsListComponent,
    canActivate: [canActivateCartGuard],
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [canActivateCartGuard],
  },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
];
