import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[mouseitalic]',
})
export default class MouseitalicDirective {
  private fontStyle = 'normal';

  @HostBinding('style.font-style')
  protected get getFontStyle() {
    return this.fontStyle;
  }

  @HostBinding('style.cursor')
  protected get getCursor() {
    return 'pointer';
  }

  @HostListener('mouseenter')
  protected onMouseEnter() {
    this.fontStyle = 'italic';
  }

  @HostListener('mouseleave')
  protected onMouseLeave() {
    this.fontStyle = 'normal';
  }
}
