import { Component } from '@angular/core';
import { WidgetBaseComponent } from '../widget-base/widget-base.component';
import {
  TvRemoteData,
  TvRemoteDataRoutes,
} from 'src/app/core/models/data/tv-remote-data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tv-remote',
  templateUrl: './tv-remote.component.html',
  styleUrls: ['./tv-remote.component.css'],
})
export class TvRemoteComponent extends WidgetBaseComponent {
  private _data!: TvRemoteData;

  get routes(): TvRemoteDataRoutes {
    return this._data.routes;
  }

  override onInitCallback(): void {
    this._data = this.widget.data as TvRemoteData;
  }

  override onValueChanged(newValueString: string): void {
    throw new Error('Method not implemented.');
  }

  sendPowerOn() {
    this.sendCommand(this._data.routes.on);
  }

  sendPowerOff() {
    this.sendCommand(this._data.routes.off);
  }

  sendHome() {
    this.sendCommand(this._data.routes.home);
  }

  sendSource() {
    this.sendCommand(this._data.routes.source);
  }

  sendSettings() {
    this.sendCommand(this._data.routes.settings);
  }

  sendBack() {
    this.sendCommand(this._data.routes.back);
  }

  sendOk() {
    this.sendCommand(this._data.routes.ok);
  }

  sendUp() {
    this.sendCommand(this._data.routes.up);
  }

  sendDown() {
    this.sendCommand(this._data.routes.down);
  }

  sendLeft() {
    this.sendCommand(this._data.routes.left);
  }

  sendRight() {
    this.sendCommand(this._data.routes.right);
  }

  sendPause() {
    this.sendCommand(this._data.routes.pause);
  }

  sendPlay() {
    this.sendCommand(this._data.routes.play);
  }

  private sendCommand(route: string) {
    const url = this.widget.httpSettings?.url + route;
    this.httpClient.post(url, {}).subscribe();
  }
}
