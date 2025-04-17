import { Component, inject } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  template: `
    <div class="action">
      @if(!isLoggedIn()){
      <button
        class="block py-2 px-3 text-white bg-blue-700 hover:bg-blue-500 cursor-pointer rounded-sm dark:text-white md:dark:text-blue-500"
        (click)="login()"
      >
        Login
      </button>
      }@else{
      <button
        class="block py-2 px-3 text-white bg-red-700 hover:bg-red-500 cursor-pointer rounded-sm dark:text-white md:dark:text-red-500"
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
  auth = inject(AuthService);
  isLoggedIn$ = this.auth.isLoggedIn$;
  isLoggedIn = this.auth.isLoggedIn;

  login() {
    this.auth.loginDispatch();
  }
  logout() {
    this.auth.logoutDispatch();
  }
}
