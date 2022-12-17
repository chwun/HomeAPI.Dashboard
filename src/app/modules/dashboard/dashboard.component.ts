import { Component, OnInit } from '@angular/core';
import { DashboardConfig } from 'src/app/core/models/dashboard-config';
import { DashboardService } from 'src/app/core/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  config: DashboardConfig | undefined;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService
      .getDashboardConfig()
      .subscribe((c) => (this.config = c));
  }
}
