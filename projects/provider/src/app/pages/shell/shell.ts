import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {
  ActivityIcon,
  LogOutIcon,
  LucideAngularModule,
  ShoppingBasketIcon,
  UserRoundIcon,
  XIcon,
} from 'lucide-angular';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    RouterOutlet,
    LucideAngularModule,
    RouterLink,
  ],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
})
export class ShellComponent {
  router = inject(Router);
  menuItems = [
    {
      label: 'Dashboard',
      icon: ActivityIcon,
      route: '/dashboard',
    },
    {
      label: 'Users',
      icon: UserRoundIcon,
      route: '/users',
    },
    {
      label: 'Products',
      icon: ShoppingBasketIcon,
      route: '/products',
    },
  ];
  logoutIcon = LogOutIcon;
  XIcon = XIcon;

  logout(): void {
    // Perform any cleanup or token invalidation here
    this.router.navigate([
      '/login',
    ]);
  }
}
