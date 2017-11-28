import { LoginComponent } from '../core/login/login.component';
import { DashboardComponent } from '../core/dashboard/dashboard.component';
import { AuthGuard } from '../core/auth.guard';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent }
]