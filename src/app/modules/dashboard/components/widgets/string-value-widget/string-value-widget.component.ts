import { Component, OnInit } from '@angular/core';
import { WidgetComponentData } from 'src/app/core/componentModels/widget-component-data';
import { DashboardWidget } from 'src/app/core/models/dashboard-widget';
import { WidgetBaseComponent } from '../widget-base/widget-base.component';

@Component({
  selector: 'app-string-value-widget',
  templateUrl: './string-value-widget.component.html',
  styleUrls: ['./string-value-widget.component.css'],
})
export class StringValueWidgetComponent extends WidgetBaseComponent {
  onInitCallback(): void {
    // this._data = this.widget.data as NumberValueData;
  }

  onValueChanged(newValueString: string): void {}
}
