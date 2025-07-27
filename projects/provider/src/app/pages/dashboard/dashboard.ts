import { Component } from '@angular/core';
import { AlignJustifyIcon, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  imports: [
    LucideAngularModule,
  ],
})
export class DashboardComponent {
  AlignJustifyIcon = AlignJustifyIcon;
}
