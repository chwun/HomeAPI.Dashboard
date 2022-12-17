import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardConfig } from '../models/dashboard-config';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private _dashboardConfigUrl = 'http://192.168.178.25:9500/static/';

  constructor(private http: HttpClient) {}

  getDashboardConfig(): Observable<DashboardConfig | undefined> {
    return this.http.get<DashboardConfig>(this._dashboardConfigUrl);
  }
}
