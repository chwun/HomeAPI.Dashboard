import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from '../settings/settings.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SettingsComponent],
  imports: [SharedModule],
})
export class SettingsModule {}
