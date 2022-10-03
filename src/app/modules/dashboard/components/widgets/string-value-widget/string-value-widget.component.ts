import { Component, OnInit } from '@angular/core';
import { WidgetComponentData } from 'src/app/core/componentModels/widget-component-data';

@Component({
  selector: 'app-string-value-widget',
  templateUrl: './string-value-widget.component.html',
  styleUrls: ['./string-value-widget.component.css'],
})
export class StringValueWidgetComponent implements OnInit, WidgetComponentData {
  data: any;

  constructor() {}

  ngOnInit(): void {}
}
