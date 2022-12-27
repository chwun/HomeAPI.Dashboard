import { Component } from '@angular/core';
import { DashboardConfig } from 'src/app/core/models/dashboard-config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  config: DashboardConfig | undefined;

  constructor() {}
}
