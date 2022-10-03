import { Component, OnInit } from '@angular/core';
import { WidgetComponentData } from 'src/app/core/componentModels/widget-component-data';

@Component({
  selector: 'app-number-value-widget',
  templateUrl: './number-value-widget.component.html',
  styleUrls: ['./number-value-widget.component.css'],
})
export class NumberValueWidgetComponent implements OnInit, WidgetComponentData {
  data: any;

  constructor() {}

  ngOnInit(): void {}
}
