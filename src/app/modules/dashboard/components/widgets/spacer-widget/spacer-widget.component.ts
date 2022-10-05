import { Component, OnInit } from '@angular/core';
import { WidgetComponentData } from 'src/app/core/componentModels/widget-component-data';
import { DashboardWidget } from 'src/app/core/models/dashboard-widget';

@Component({
  selector: 'app-spacer-widget',
  templateUrl: './spacer-widget.component.html',
  styleUrls: ['./spacer-widget.component.css'],
})
export class SpacerWidgetComponent implements OnInit, WidgetComponentData {
  widget!: DashboardWidget;

  constructor() {}

  ngOnInit(): void {}
}
