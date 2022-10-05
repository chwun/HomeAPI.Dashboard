import { DashboardWidgetDatasource } from './dashboard-widget-datasource';
import { DashboardWidgetHttpSettings } from './dashboard-widget-http-settings';
import { DashboardWidgetMqttSettings } from './dashboard-widget-mqtt-settings';
import { DashboardWidgetType } from './dashboard-widget-type';
import { NumberValueData } from './data/number-value-data';

export interface DashboardWidget {
  type: DashboardWidgetType;
  label: string;
  icon: string;
  datasource: DashboardWidgetDatasource;
  mqttSettings: DashboardWidgetMqttSettings | undefined;
  httpSettings: DashboardWidgetHttpSettings | undefined;
  data?: NumberValueData | undefined;
}
