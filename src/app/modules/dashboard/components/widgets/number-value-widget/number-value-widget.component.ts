import { Component, OnInit } from '@angular/core';
import { WidgetComponentData } from 'src/app/core/componentModels/widget-component-data';
import { DashboardWidget } from 'src/app/core/models/dashboard-widget';

@Component({
  selector: 'app-number-value-widget',
  templateUrl: './number-value-widget.component.html',
  styleUrls: ['./number-value-widget.component.css'],
})
export class NumberValueWidgetComponent implements OnInit, WidgetComponentData {
  widget!: DashboardWidget;

  formattedValue: string = '';

  constructor() {}

  ngOnInit(): void {
    this.onValueChanged(20.05);
  }

  private onValueChanged(newValue: number) {
    this.formattedValue = newValue.toString() + ' °C';
  }

  // private resolveProperty(payload: any, valuePath: string): any {
  //   const properties = valuePath.split('.');
  //   return properties.reduce((prev, curr) => prev?.[curr], payload);
  // }
}
