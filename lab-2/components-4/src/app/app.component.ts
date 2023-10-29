import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app',
  template: `<child-comp [name]="name"></child-comp>
    <input type="text" [(ngModel)]="name" />
    <input type="number" [(ngModel)]="age" />`,
})
export default class AppComponent implements OnChanges {
  protected name = 'Tom';

  protected age = 25;

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
