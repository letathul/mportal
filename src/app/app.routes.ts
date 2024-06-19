import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  CanActivateFn,
  Router,
  RouterModule,
  RouterStateSnapshot,
  Routes,
  UrlTree,
  mapToCanActivate,
} from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { Injectable, NgModule, inject } from '@angular/core';
import { AdminComponent } from './shared/components/admin/admin.component';
import { SignInComponent } from './shared/components/sign-in/sign-in.component';
import { AuthService } from './shared/service/auth/auth-service.service';
import { Observable, catchError, map } from 'rxjs';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  console.log('authGuard');
  const data = authService.isLoggedIn();

  if (!data) {
    router.navigate(['/login']);
  }
  return data;
};
//==========================================================
export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard],
  },
  { path: 'login', component: SignInComponent },
  {
    path: '**',
    redirectTo: '',
  },
];

//======================================
function canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isLoggedIn = authService.isLoggedIn(); // Implement this method in AuthService
  console.log('isLoggedIn' + isLoggedIn);
  if (isLoggedIn) {
    return true;
  } else {
    router.navigate(['/login']); // Redirect to a login page
    return false;
  }
}

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
