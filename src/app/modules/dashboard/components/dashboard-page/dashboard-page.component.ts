import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { DashboardPage } from 'src/app/core/models/dashboard-page';
import { DashboardService } from 'src/app/core/services/dashboard.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit {
  page: DashboardPage | undefined;

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(
        switchMap((queryParamMap) => {
          const pageIdParsed = Number(queryParamMap.get('page'));
          const pageId = !Number.isNaN(pageIdParsed) ? pageIdParsed : 0;
          return this.dashboardService.getDashboardPage(pageId);
        })
      )
      .subscribe((page) => (this.page = page));
  }
}
