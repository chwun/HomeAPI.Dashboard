import { Injectable, Type } from '@angular/core';
import { MqttSelectionWidgetComponent } from 'src/app/modules/dashboard/components/widgets/mqtt-selection-widget/mqtt-selection-widget.component';
import { NumberValueWidgetComponent } from 'src/app/modules/dashboard/components/widgets/number-value-widget/number-value-widget.component';
import { SpacerWidgetComponent } from 'src/app/modules/dashboard/components/widgets/spacer-widget/spacer-widget.component';
import { StringValueWidgetComponent } from 'src/app/modules/dashboard/components/widgets/string-value-widget/string-value-widget.component';
import { WidgetComponentData } from '../componentModels/widget-component-data';
import { DashboardWidgetType } from '../models/dashboard-widget-type';
import { CheckboxWidgetComponent } from 'src/app/modules/dashboard/components/widgets/checkbox-widget/checkbox-widget.component';

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

      case DashboardWidgetType.mqttSelection:
        return MqttSelectionWidgetComponent;

      case DashboardWidgetType.checkbox:
        return CheckboxWidgetComponent;

      default:
        return null;
    }
  }
}
