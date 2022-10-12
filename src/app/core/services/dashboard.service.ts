import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardPage } from '../models/dashboard-page';
import { DashboardWidgetDatasource } from '../models/dashboard-widget-datasource';
import { DashboardWidgetType } from '../models/dashboard-widget-type';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private tmpPages: DashboardPage[] = [
    {
      id: 1,
      title: 'Home',
      icon: 'home',
      groups: [
        // {
        //   id: 1,
        //   title: 'Messwerte',
        //   icon: 'poll',
        //   widgets: [
        //     {
        //       type: DashboardWidgetType.numberValue,
        //       icon: '',
        //       label: 'Test-Wert',
        //       datasource: DashboardWidgetDatasource.mqtt,
        //       mqttSettings: {
        //         server: '192.168.178.25',
        //         port: 1883,
        //         topic: 'abc',
        //       },
        //       httpSettings: undefined,
        //       data: {
        //         valueFormat: 'abc123',
        //       },
        //     },
        //     {
        //       type: DashboardWidgetType.spacer,
        //       icon: '',
        //       label: 'Test-String',
        //       datasource: DashboardWidgetDatasource.mqtt,
        //       mqttSettings: {
        //         server: '192.168.178.25',
        //         port: 1883,
        //         topic: 'abc',
        //       },
        //       httpSettings: undefined,
        //     },
        //     {
        //       type: DashboardWidgetType.stringValue,
        //       icon: '',
        //       label: 'Test-String',
        //       datasource: DashboardWidgetDatasource.mqtt,
        //       mqttSettings: {
        //         server: '192.168.178.25',
        //         port: 1883,
        //         topic: 'abc',
        //       },
        //       httpSettings: undefined,
        //     },
        //   ],
        // },
        {
          id: 2,
          title: 'Batterien',
          icon: 'battery_std',
          widgets: [
            {
              type: DashboardWidgetType.numberValue,
              icon: '',
              label: 'Bewegungsmelder Flur',
              datasource: DashboardWidgetDatasource.mqtt,
              mqttSettings: {
                server: 'ws://192.168.178.25:9001/mqtt',
                port: 9001,
                topic: 'dashboard/measurement/batteries/Bewegungsmelder_Flur',
              },
              httpSettings: undefined,
              data: {
                valueFormat: '{{ value:1}}',
              },
            },
          ],
        },
        // {
        //   id: 3,
        //   title: 'Test',
        //   icon: '',
        //   widgets: [
        //     {
        //       type: DashboardWidgetType.numberValue,
        //       icon: '',
        //       label: 'Test-Wert',
        //       datasource: DashboardWidgetDatasource.mqtt,
        //       mqttSettings: {
        //         server: '192.168.178.25',
        //         port: 1883,
        //         topic: 'abc',
        //       },
        //       httpSettings: undefined,
        //       data: {
        //         valueFormat: '',
        //       },
        //     },
        //   ],
        // },
      ],
    },
    {
      id: 2,
      title: 'Seite 2',
      icon: 'home',
      groups: [
        {
          id: 1,
          title: 'Blub bla',
          icon: 'abc',
          widgets: [
            {
              type: DashboardWidgetType.numberValue,
              icon: '',
              label: 'Test-Wert',
              datasource: DashboardWidgetDatasource.mqtt,
              mqttSettings: {
                server: '192.168.178.25',
                port: 1883,
                topic: 'abc',
              },
              httpSettings: undefined,
              data: {
                valueFormat: '',
              },
            },
          ],
        },
      ],
    },
  ];

  constructor() {}

  getDashboardPage(pageId: number): Observable<DashboardPage | undefined> {
    return of(this.tmpPages.find((x) => x.id === pageId));
  }
}
