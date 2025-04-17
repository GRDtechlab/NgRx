import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { login_action, logout_action } from './store/auth.reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  store = inject(Store);
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
}
