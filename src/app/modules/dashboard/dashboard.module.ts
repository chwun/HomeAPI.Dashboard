import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { DashboardGroupComponent } from './components/dashboard-group/dashboard-group.component';
import { WidgetPlaceholderDirective } from './directives/widget-placeholder.directive';
import { DashboardWidgetHostComponent } from './components/dashboard-widget-host/dashboard-widget-host.component';
import { NumberValueWidgetComponent } from './components/widgets/number-value-widget/number-value-widget.component';
import { StringValueWidgetComponent } from './components/widgets/string-value-widget/string-value-widget.component';
import { SpacerWidgetComponent } from './components/widgets/spacer-widget/spacer-widget.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardPageComponent,
    DashboardGroupComponent,
    WidgetPlaceholderDirective,
    DashboardWidgetHostComponent,
    NumberValueWidgetComponent,
    StringValueWidgetComponent,
    SpacerWidgetComponent,
  ],
  imports: [SharedModule, DashboardRoutingModule],
})
export class DashboardModule {}
