import {
  type OnInit,
  type OnChanges,
  type SimpleChanges,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'child-comp',
  template: `<p>Привіт {{ name }}</p>`,
})
export default class ChildComponent implements OnInit, OnChanges {
  @Input()
  protected name = '';

  constructor() {
    this.log(`constructor`);
  }

  public ngOnInit() {
    this.log(`onInit`);
  }

  public ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);

      this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  private log(msg: string) {
    console.log(msg);
  }
}
