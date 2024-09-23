import { Injectable, Type } from '@angular/core';
import { MqttSelectionWidgetComponent } from 'src/app/modules/dashboard/components/widgets/mqtt-selection-widget/mqtt-selection-widget.component';
import { NumberValueWidgetComponent } from 'src/app/modules/dashboard/components/widgets/number-value-widget/number-value-widget.component';
import { SpacerWidgetComponent } from 'src/app/modules/dashboard/components/widgets/spacer-widget/spacer-widget.component';
import { StringValueWidgetComponent } from 'src/app/modules/dashboard/components/widgets/string-value-widget/string-value-widget.component';
import { WidgetComponentData } from '../componentModels/widget-component-data';
import { DashboardWidgetType } from '../models/dashboard-widget-type';
import { CheckboxWidgetComponent } from 'src/app/modules/dashboard/components/widgets/checkbox-widget/checkbox-widget.component';
import { TvRemoteComponent } from 'src/app/modules/dashboard/components/widgets/tv-remote/tv-remote.component';

@Injectable({
  providedIn: 'root',
})
export class WidgetComponentResolverService {
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

      case DashboardWidgetType.tvRemote:
        return TvRemoteComponent;

      default:
        return null;
    }
  }
}
