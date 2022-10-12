import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { WidgetComponentData } from 'src/app/core/componentModels/widget-component-data';
import { DashboardWidget } from 'src/app/core/models/dashboard-widget';
import { CommunicationService } from 'src/app/core/services/communication.service';

@Component({
  selector: 'app-widget-base',
  templateUrl: './widget-base.component.html',
  styleUrls: ['./widget-base.component.css'],
})
export abstract class WidgetBaseComponent
  implements OnInit, OnDestroy, WidgetComponentData
{
  widget!: DashboardWidget;
  hasError = false;

  private _killSubscriptions$ = new Subject<void>();

  constructor(protected communication: CommunicationService) {}

  ngOnInit(): void {
    this.communication
      .registerDatasource(
        this.widget.datasource,
        this.widget.mqttSettings,
        this.widget.httpSettings
      )
      .pipe(takeUntil(this._killSubscriptions$))
      .subscribe({
        next: (x) => {
          this.hasError = false;
          this.onValueChanged(x);
        },
        error: () => (this.hasError = true),
      });
  }

  ngOnDestroy(): void {
    // TODO: deregister datasource!

    this._killSubscriptions$.next();
  }

  abstract onValueChanged(newValue: string): void;
}