import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { map } from 'rxjs';

export const routerInjection = () => inject(Router);

export const authStateObs$ = () => inject(AuthService).authState$;

export const authGuard: CanActivateFn = () => {
  const router = routerInjection();
  return authStateObs$().pipe(
    map((user)=>{
      if (!user){
        router.navigateByUrl('log-in');
        return false;
      }
      return true;
    })
  );
};

export const publicGuard: CanActivateFn = () => {
  const router = routerInjection();
  return authStateObs$().pipe(
    map((user)=>{
      if(user) {
        router.navigateByUrl('/');
        return false;
      }
      return true;
    })
  );
}