import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { canActivateCartGuard } from './guards/route-guards';

export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  {
    path: 'product-list',
    component: ProductsListComponent,
    canActivate: [canActivateCartGuard],
  },
];
