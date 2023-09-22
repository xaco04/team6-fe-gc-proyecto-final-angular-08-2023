import { CanActivateFn, Router} from '@angular/router';
import { TokenStorageServiceService } from '../services/shared/token-storage-service.service';
import { inject } from '@angular/core';

export const chefGuard: CanActivateFn = (route, state) => {

  const TokenStorageService = inject(TokenStorageServiceService);
  const router = inject(Router);

  if (TokenStorageService.getRole() == 'Encargado') {

    return true;
  }
  router.navigate([""]);
  return false;
};

