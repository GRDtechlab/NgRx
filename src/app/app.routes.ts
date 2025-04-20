import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { canActivateCartGuard } from './guards/route-guards';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

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
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
];
