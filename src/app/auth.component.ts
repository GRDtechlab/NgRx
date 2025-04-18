import { Component, effect, inject } from '@angular/core';
import { AuthService } from './auth.service';
import { ToastService } from './custom-toast/toast.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  toast = inject(ToastService);
  router = inject(Router);
  isLoggedIn$ = this.auth.isLoggedIn$;
  isLoggedIn = this.auth.isLoggedIn;

  // Side effects called when logout action completes.
  // see auth.reducer.ts file logout_complete createEffect is runs when logout action dispatched completes.
  logout_clear = effect(() => {
    if (this.auth.logout_complete()) {
      this.router.navigateByUrl('/');
      this.toast.showToast('logout successfully.');
    }
  });

  login() {
    this.auth.loginDispatch();
  }
  logout() {
    this.auth.logoutDispatch();
  }
}
