import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardGroupComponent } from './dashboard-group/dashboard-group.component';

@NgModule({
  declarations: [DashboardComponent, DashboardPageComponent, DashboardGroupComponent],
  imports: [SharedModule, DashboardRoutingModule],
})
export class DashboardModule {}
