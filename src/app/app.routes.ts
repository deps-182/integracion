import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PruebaComponent } from './prueba/prueba.component';
import HomeComponent from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { authGuard, publicGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [authGuard] },
    { path: 'log-in', component: LoginComponent, canActivate: [publicGuard] },
    { path: 'sign-up', component: SignupComponent, canActivate: [publicGuard]},
    { path: 'prueba', component: PruebaComponent, canActivate: [authGuard] }
];