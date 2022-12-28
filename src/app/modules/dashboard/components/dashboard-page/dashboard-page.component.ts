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

  private pageId: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(
        switchMap((queryParamMap) => {
          const pageIdParsed = Number(queryParamMap.get('page'));
          this.pageId =
            !Number.isNaN(pageIdParsed) && pageIdParsed > 0 ? pageIdParsed : 1;
          return this.dashboardService.getDashboardConfig();
        })
      )
      .subscribe((config) => {
        this.page = config?.pages?.find((x) => x.id === this.pageId);
      });
  }
}
