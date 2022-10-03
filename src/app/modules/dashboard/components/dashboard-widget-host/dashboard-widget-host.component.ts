import { Component, Input, OnInit, Type, ViewChild } from '@angular/core';
import { WidgetComponentData } from 'src/app/core/componentModels/widget-component-data';
import { DashboardWidgetType } from 'src/app/core/models/dashboard-widget-type';
import { WidgetComponentResolverService } from 'src/app/core/services/widget-component-resolver.service';
import { WidgetPlaceholderDirective } from '../../directives/widget-placeholder.directive';

@Component({
  selector: 'app-dashboard-widget-host',
  templateUrl: './dashboard-widget-host.component.html',
  styleUrls: ['./dashboard-widget-host.component.css'],
})
export class DashboardWidgetHostComponent implements OnInit {
  @Input() widgetType!: DashboardWidgetType;
  @Input() widgetData: any;

  @ViewChild(WidgetPlaceholderDirective, { static: true })
  widgetPlaceholder!: WidgetPlaceholderDirective;

  constructor(private widgetResolver: WidgetComponentResolverService) {}

  ngOnInit(): void {
    this.loadWidget();
  }

  private loadWidget() {
    const viewContainerRef = this.widgetPlaceholder.viewContainerRef;
    viewContainerRef.clear();

    const componentType = this.widgetResolver.resolveComponent(this.widgetType);

    if (componentType) {
      const componentRef =
        viewContainerRef.createComponent<WidgetComponentData>(componentType);
    }
  }
}
