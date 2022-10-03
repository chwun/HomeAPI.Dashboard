import { Component, Input, OnInit } from '@angular/core';
import { DashboardGroup } from 'src/app/core/models/dashboard-group';

@Component({
  selector: 'app-dashboard-group',
  templateUrl: './dashboard-group.component.html',
  styleUrls: ['./dashboard-group.component.css'],
})
export class DashboardGroupComponent {
  @Input() group: DashboardGroup | undefined;

  constructor() {}
}
