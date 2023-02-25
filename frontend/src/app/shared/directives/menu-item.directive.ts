import {
  AfterViewInit,
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appMenuItem]',
})
export class MenuItemDirective implements AfterViewInit {
  @Input('appMenuItem') menuItem!: any;
  @Input('appMenuItemElement') element!: any;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  ngAfterViewInit() {
    if (!this.menuItem.condition || this.menuItem.condition(this.element)) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
