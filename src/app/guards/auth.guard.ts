import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { TokenStorageServiceService } from '../services/shared/token-storage-service.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  const tokenStorageService = inject(TokenStorageServiceService);
  const router = inject(Router);

  if (tokenStorageService.getToken()) {

    return true
  }
  router.navigate(["/login"]);
  return false;
};

