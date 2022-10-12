import { Component, OnInit } from '@angular/core';
import { WidgetBaseComponent } from '../widget-base/widget-base.component';

@Component({
  selector: 'app-number-value-widget',
  templateUrl: './number-value-widget.component.html',
  styleUrls: ['./number-value-widget.component.css'],
})
export class NumberValueWidgetComponent
  extends WidgetBaseComponent
  implements OnInit
{
  formattedValue: string = '';

  onValueChanged(newValue: string) {
    this.formattedValue = newValue.toString() + ' °C';
  }

  // private resolveProperty(payload: any, valuePath: string): any {
  //   const properties = valuePath.split('.');
  //   return properties.reduce((prev, curr) => prev?.[curr], payload);
  // }
}
