import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { authReducer } from './store/auth.reducer';
import { provideHttpClient } from '@angular/common/http';
import { ProductsFeature } from './store/products.features';
import { ProductEffects } from './store/products.effects';
import { cartFeature } from './store/cart.features';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore({ auth: authReducer }),
    provideState(ProductsFeature),
    provideState(cartFeature),
    provideEffects(ProductEffects),
  ],
};
