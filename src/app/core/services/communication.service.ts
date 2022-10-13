import { Injectable, OnDestroy } from '@angular/core';
import { EMPTY, Observable, Subject, throwError } from 'rxjs';
import { DashboardWidgetDatasource } from '../models/dashboard-widget-datasource';
import { DashboardWidgetHttpSettings } from '../models/dashboard-widget-http-settings';
import { DashboardWidgetMqttSettings } from '../models/dashboard-widget-mqtt-settings';
import * as mqtt from 'mqtt';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService implements OnDestroy {
  // each combination of server/port/topic gets a subject object assigned:
  mqttSubjects: Map<[string, number, string], Subject<string>>;
  mqttClients: Map<[string, number], mqtt.MqttClient>;

  constructor() {
    this.mqttSubjects = new Map<[string, number, string], Subject<string>>();
    this.mqttClients = new Map<[string, number], mqtt.MqttClient>();
  }

  ngOnDestroy(): void {
    for (const client of this.mqttClients.values()) {
      client.end(true);
    }

    for (const subj$ of this.mqttSubjects.values()) {
      subj$.unsubscribe();
    }
  }

  registerDatasource(
    type: DashboardWidgetDatasource,
    mqttSettings: DashboardWidgetMqttSettings | undefined,
    httpSettings: DashboardWidgetHttpSettings | undefined
  ): Observable<string> {
    switch (type) {
      case DashboardWidgetDatasource.mqtt:
        return this.registerMqttDatasource(mqttSettings);

      case DashboardWidgetDatasource.http:
        return this.registerHttpDatasource(httpSettings);

      default:
        return EMPTY;
    }
  }

  private registerMqttDatasource(
    settings: DashboardWidgetMqttSettings | undefined
  ): Observable<string> {
    if (!settings) {
      return EMPTY;
    }

    const subjKey: [server: string, port: number, topic: string] = [
      settings.server,
      settings.port,
      settings.topic,
    ];

    let subj$: Subject<string> | null | undefined =
      this.mqttSubjects.get(subjKey);

    if (subj$) {
      return subj$.asObservable();
    }

    subj$ = this.createMqttSubject(subjKey[0], subjKey[1], subjKey[2]);

    if (subj$) {
      this.mqttSubjects.set(subjKey, subj$);

      return subj$.asObservable();
    }

    return throwError(() => '');
  }

  private registerHttpDatasource(
    settings: DashboardWidgetHttpSettings | undefined
  ): Observable<any> {
    if (!settings) {
      return EMPTY;
    }

    // TODO
    return EMPTY;
  }

  private createMqttSubject(
    server: string,
    port: number,
    topic: string
  ): Subject<any> | null {
    try {
      const client = this.createMqttClient(server, port);
      this.mqttClients.set([server, port], client);

      const $newSubj = new Subject<any>();
      this.mqttSubjects.set([server, port, topic], $newSubj);

      client.on('connect', () => {
        client.subscribe(topic);
      });
      client.on('message', (messageTopic: string, payload: Buffer, _) => {
        if (messageTopic.toLowerCase() == topic.toLowerCase()) {
          $newSubj.next(payload.toString());
        }
      });

      return $newSubj;
    } catch (error: any) {
      return null;
    }
  }

  private createMqttClient(server: string, port: number): mqtt.MqttClient {
    return mqtt.connect(server, {
      port: port,
      protocol: 'ws',
    });
  }
}
