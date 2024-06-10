import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent},
    { path: 'user', component: UserComponent},

];