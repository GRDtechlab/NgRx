import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { login_action, logout_action } from './store/auth.reducer';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  store = inject(Store);
  action$ = inject(Actions);
  isLoggedIn$ = this.store.select((state) => state.auth.isLoggedIn);
  isLoggedIn = toSignal(this.isLoggedIn$);

  loginDispatch() {
    // here parameter are defined in 'login-action' using props()..
    // see auth.reducer.ts file.
    this.store.dispatch(login_action({ userName: 'GRD', password: 'GRD' }));
  }
  logoutDispatch() {
    this.store.dispatch(logout_action());
  }

  logout_complete$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(logout_action),
        tap(() => {
          // Call your desired function here
          console.log('Side effects from effects tap');
        }),
        take(1)
      );
    },
    { dispatch: false }
  );

  logout_complete = toSignal(this.logout_complete$, { initialValue: null });
}
