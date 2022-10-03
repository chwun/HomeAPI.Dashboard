import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appWidgetPlaceholder]',
})
export class WidgetPlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
