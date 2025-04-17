import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, of, catchError, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadProducts,
  loadProductsFailure,
  loadProductsSuccess,
  products,
} from './products.features';

@Injectable()
export class ProductEffects {
  action$ = inject(Actions);
  http = inject(HttpClient);

  loadProducts$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadProducts),
      mergeMap(() =>
        this.http.get<products[]>('https://fakestoreapi.com/products').pipe(
          map((products) => loadProductsSuccess({ products })),
          catchError((error) =>
            of(loadProductsFailure({ error: error.message || 'Unknown Error' }))
          )
        )
      )
    )
  );
}
