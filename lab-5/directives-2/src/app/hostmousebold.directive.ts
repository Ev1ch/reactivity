import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hostmousebold]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export default class HostmouseboldDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  }

  protected onMouseEnter() {
    this.setFontWeight('bold');
  }

  protected onMouseLeave() {
    this.setFontWeight('normal');
  }

  private setFontWeight(val: string) {
    this.renderer.setStyle(this.element.nativeElement, 'font-weight', val);
  }
}
