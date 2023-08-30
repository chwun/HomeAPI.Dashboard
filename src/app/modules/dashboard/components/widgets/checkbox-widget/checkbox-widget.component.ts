import { Component } from '@angular/core';
import { WidgetBaseComponent } from '../widget-base/widget-base.component';

@Component({
  selector: 'app-checkbox-widget',
  templateUrl: './checkbox-widget.component.html',
  styleUrls: ['./checkbox-widget.component.css'],
})
export class CheckboxWidgetComponent extends WidgetBaseComponent {
  value: boolean = false;

  override onInitCallback(): void {}

  override onValueChanged(newValueString: string): void {
    if (newValueString === 'true') {
      this.value = true;
    } else if (newValueString === 'false') {
      this.value = false;
    }
  }

  toggle(): void {
    this.publishMqttMessage(
      this.widget.mqttSettings?.topic ?? '',
      String(!this.value),
      true
    );
  }
}
