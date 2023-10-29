import { Directive, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[valuesize]',
})
export default class ValueDirective {
  @Input('valuesize')
  protected selectedSize = '18px';

  @Input()
  protected defaultSize = '16px';

  private fontSize: string;

  private fontWeight = 'normal';

  constructor() {
    this.fontSize = this.defaultSize;
  }

  @HostBinding('style.fontSize')
  protected get getFontSize() {
    return this.fontSize;
  }

  @HostBinding('style.fontWeight')
  protected get getFontWeight() {
    return this.fontWeight;
  }

  @HostBinding('style.cursor')
  protected get getCursor() {
    return 'pointer';
  }

  @HostListener('mouseenter')
  protected onMouseEnter() {
    this.fontWeight = 'bold';
    this.fontSize = this.selectedSize;
  }

  @HostListener('mouseleave')
  protected onMouseLeave() {
    this.fontWeight = 'normal';
    this.fontSize = this.defaultSize;
  }
}
