import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { authGuard, publicGuard } from './guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { SignupComponent } from './auth/signup/signup.component';

export const routes: Routes = [
    { path: '', component: InicioComponent, canActivate: [publicGuard] },
    { path: 'log-in', component: LoginComponent, canActivate: [publicGuard] },
    { path: 'sign-up', component: SignupComponent, canActivate: [publicGuard]},
    { path: 'admin', component: AdminComponent,canActivate: [authGuard]},
];