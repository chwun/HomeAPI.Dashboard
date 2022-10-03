import { Injectable, Type } from '@angular/core';
import { NumberValueWidgetComponent } from 'src/app/modules/dashboard/components/widgets/number-value-widget/number-value-widget.component';
import { SpacerWidgetComponent } from 'src/app/modules/dashboard/components/widgets/spacer-widget/spacer-widget.component';
import { StringValueWidgetComponent } from 'src/app/modules/dashboard/components/widgets/string-value-widget/string-value-widget.component';
import { WidgetComponentData } from '../componentModels/widget-component-data';
import { DashboardWidgetType } from '../models/dashboard-widget-type';

@Injectable({
  providedIn: 'root',
})
export class WidgetComponentResolverService {
  constructor() {}

  resolveComponent(
    type: DashboardWidgetType
  ): Type<WidgetComponentData> | null {
    switch (type) {
      case DashboardWidgetType.numberValue:
        return NumberValueWidgetComponent;

      case DashboardWidgetType.stringValue:
        return StringValueWidgetComponent;

      case DashboardWidgetType.spacer:
        return SpacerWidgetComponent;

      default:
        return null;
    }
  }
}
