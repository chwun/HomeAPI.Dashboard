import { DashboardWidgetDatasource } from './dashboard-widget-datasource';
import { DashboardWidgetHttpSettings } from './dashboard-widget-http-settings';
import { DashboardWidgetMqttSettings } from './dashboard-widget-mqtt-settings';
import { DashboardWidgetType } from './dashboard-widget-type';

export interface DashboardWidget {
  type: DashboardWidgetType;
  label: string;
  icon: string;
  valuePath: string;
  valueFormat: string;
  datasource: DashboardWidgetDatasource;
  mqttSettings: DashboardWidgetMqttSettings | undefined;
  httpSettings: DashboardWidgetHttpSettings | undefined;
  // data: any;
}
