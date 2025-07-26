
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
})
export class ShellComponent {

  constructor(private router: Router) {}

  logout() {
    // Perform any cleanup or token invalidation here
    this.router.navigate(['/login']);
  }
}
