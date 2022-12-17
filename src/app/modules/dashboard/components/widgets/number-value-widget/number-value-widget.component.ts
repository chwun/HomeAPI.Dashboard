import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NumberValueData } from 'src/app/core/models/data/number-value-data';
import { WidgetBaseComponent } from '../widget-base/widget-base.component';

interface ValueFormatReplacement {
  placeholder: string;
  valuePath: string;
  formatString: string;
}

@Component({
  selector: 'app-number-value-widget',
  templateUrl: './number-value-widget.component.html',
  styleUrls: ['./number-value-widget.component.css'],
})
export class NumberValueWidgetComponent extends WidgetBaseComponent {
  private _data!: NumberValueData;
  private _replacements: ValueFormatReplacement[] = [];

  formattedValueString: string = '';

  onInitCallback(): void {
    this._data = (this.widget.data as NumberValueData) ?? { valueFormat: '' };
    this.parseValueFormat();
  }

  onValueChanged(newValueString: string) {
    if (!newValueString) {
      this.formattedValueString = '';
      return;
    }

    const newValueObj = JSON.parse(newValueString);

    let formattedValueString = this._data.valueFormat;

    for (const replacement of this._replacements) {
      const value = Number(
        this.resolvePayloadPropertyValue(newValueObj, replacement.valuePath)
      );
      const formattedValue = formatNumber(
        value,
        'de',
        replacement.formatString
      );
      formattedValueString = formattedValueString.replace(
        replacement.placeholder,
        formattedValue
      );
    }

    this.formattedValueString = formattedValueString;
  }

  private parseValueFormat(): void {
    const regex = /(\{\{[^\{\}]+\}\})+/g;
    const matches = [...this._data.valueFormat.matchAll(regex)];
    for (const match of matches) {
      const placeholder = match[1];
      const [valuePath, formatString] =
        this.parseValuePathAndFormatString(placeholder);

      const replacement: ValueFormatReplacement = {
        placeholder: placeholder,
        valuePath: valuePath,
        formatString: formatString,
      };

      this._replacements.push(replacement);
    }
  }

  parseValuePathAndFormatString(
    placeholder: string
  ): [valuePath: string, formatString: string] {
    const regex =
      /\{\{\s*(?<valuePath>[a-zA-Z\.\[\]0-9]+)(:(?<formatString>[0-9]+(\.[0-9]+(-[0-9]+))))?\s*\}\}/g;
    const matches = [...placeholder.matchAll(regex)];

    const matchGroups = matches[0]?.groups;

    if (!matchGroups) {
      return ['payload', ''];
    }

    const valuePath = matchGroups['valuePath'] ?? 'payload';
    const formatString = matchGroups['formatString'] ?? '';
    return [valuePath, formatString];
  }

  private resolvePayloadPropertyValue(payload: any, valuePath: string): any {
    if (valuePath.toLowerCase() === 'payload') {
      return payload;
    }

    if (valuePath.startsWith('payload.')) {
      valuePath = valuePath.slice('payload.'.length);
    } else if (valuePath.startsWith('payload[')) {
      valuePath = valuePath.slice('payload['.length);
    }

    const properties = valuePath.split('.');
    return properties.reduce((prev, curr) => prev?.[curr], payload);
  }
}
