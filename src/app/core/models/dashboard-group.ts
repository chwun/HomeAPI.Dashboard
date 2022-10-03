import { DashboardWidget } from './dashboard-widget';

export interface DashboardGroup {
  id: number;
  title: string;
  icon: string;
  widgets: DashboardWidget[];
}
