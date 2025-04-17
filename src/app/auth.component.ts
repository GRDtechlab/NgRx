import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { login_action, logout_action } from './store/auth.reducer';
@Component({
  selector: 'app-auth',
  template: `
    <div class="action">
      @if(!isLoggedIn()){
      <button
        class="block py-2 px-3 text-white bg-blue-700 rounded-sm dark:text-white md:dark:text-blue-500"
        (click)="login()"
      >
        Login
      </button>
      }@else{
      <button
        class="block py-2 px-3 text-white bg-red-700 rounded-sm dark:text-white md:dark:text-red-500"
        (click)="logout()"
      >
        Logout
      </button>
      }
    </div>
  `,
  imports: [],
  standalone: true,
})
export class AuthComponent {
  store = inject(Store);
  isLoggedIn$ = this.store.select((state) => state.auth.isLoggedIn);
  isLoggedIn = toSignal(this.isLoggedIn$);

  login() {
    // here parameter are defined in 'login-action' using props()..
    // see auth.reducer.ts file.
    this.store.dispatch(login_action({ userName: 'GRD', password: 'GRD' }));
  }
  logout() {
    this.store.dispatch(logout_action());
  }
}
