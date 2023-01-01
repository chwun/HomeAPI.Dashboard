import { Component } from '@angular/core';
import {
  MqttSelectionData,
  MqttSelectionItem,
} from 'src/app/core/models/data/mqtt-selection-data';
import { WidgetBaseComponent } from '../widget-base/widget-base.component';

@Component({
  selector: 'app-mqtt-selection-widget',
  templateUrl: './mqtt-selection-widget.component.html',
  styleUrls: ['./mqtt-selection-widget.component.css'],
})
export class MqttSelectionWidgetComponent extends WidgetBaseComponent {
  private _data!: MqttSelectionData;

  selectedItem: MqttSelectionItem | undefined;

  get items(): MqttSelectionItem[] {
    return this._data.items;
  }

  onInitCallback(): void {
    this._data = (this.widget.data as MqttSelectionData) ?? { items: [] };
  }

  onValueChanged(newValueString: string): void {
    this.selectedItem = this.items.find((x) => x.value === newValueString);
  }

  selectItem(item: MqttSelectionItem) {
    this.publishMqttMessage(
      this.widget.mqttSettings?.topic ?? '',
      item.value,
      true
    );
  }
}
