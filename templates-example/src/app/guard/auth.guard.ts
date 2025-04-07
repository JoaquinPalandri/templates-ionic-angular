import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthBooleanService } from '../services/auth-boolean.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthBooleanService);
  return authService.isUserAuthenticated().pipe(
    map(isAuthenticated => {
      if (isAuthenticated) {
        return true;
      } else {
        // Redirigir a la página de inicio de sesión o mostrar un mensaje de error
        return false;
      }
    })
  );
};
