import { DashboardGroup } from './dashboard-group';

export interface DashboardPage {
  id: number;
  title: string;
  icon: string;
  groups: DashboardGroup[];
}
