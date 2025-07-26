import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { ShellComponent } from './pages/shell/shell';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'shell',
    pathMatch: 'full',
  },
  {
    path: 'shell',
    component: ShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
];
