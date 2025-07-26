import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import {  ActivityIcon, LucideAngularComponent, LucideAngularModule, ShoppingBasketIcon, UserRoundIcon, LogOutIcon } from 'lucide-angular';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, LucideAngularModule, RouterLink],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
})
export class ShellComponent {
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

  constructor(private router: Router) {}

  logout() {
    // Perform any cleanup or token invalidation here
    this.router.navigate(['/login']);
  }
}
