import { inject } from '@angular/core';
import { flush } from '@angular/core/testing';
import { CanActivateFn, Router } from '@angular/router';

export const gardGuard: CanActivateFn = (route, state) => {
  return true;

  // const route = inject(Router);

};
