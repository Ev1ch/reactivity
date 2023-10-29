import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[bold]',
})
export default class BoldDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.fontWeight = 'bold';
  }
}
