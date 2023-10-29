import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[sum]',
})
export default class SumDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {}

  @Input()
  protected sumFrom: number;

  @Input()
  protected sumAnd: number;

  public ngOnInit() {
    this.viewContainer.createEmbeddedView(this.templateRef, {
      $implicit: this.sumFrom + this.sumAnd,
    });
  }
}
