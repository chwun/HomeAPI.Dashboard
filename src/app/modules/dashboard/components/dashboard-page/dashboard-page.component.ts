import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { DashboardConfig } from 'src/app/core/models/dashboard-config';
import { DashboardPage } from 'src/app/core/models/dashboard-page';
import { DashboardService } from 'src/app/core/services/dashboard.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit {
  page: DashboardPage | undefined;

  @Input()
  config: DashboardConfig | undefined;

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((queryParamMap) => {
      const pageIdParsed = Number(queryParamMap.get('page'));
      const pageId = !Number.isNaN(pageIdParsed) ? pageIdParsed : 0;
      this.page = this.config?.pages?.find((x) => x.id === pageId);
    });
  }
}
