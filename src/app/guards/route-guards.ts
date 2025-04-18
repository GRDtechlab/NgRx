import { CanActivateFn } from '@angular/router';
import { AuthService } from '../auth.service';
import { inject } from '@angular/core';
import { ToastService } from '../custom-toast/toast.service';

const canActivateCartGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const toast = inject(ToastService);

  if (authService.isLoggedIn()) {
    return true;
  }
  toast.showToast('You first need to login.');
  return false;
};

export { canActivateCartGuard };
