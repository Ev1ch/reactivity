import {
  type OnInit,
  type DoCheck,
  type OnChanges,
  type AfterContentInit,
  type AfterContentChecked,
  type AfterViewChecked,
  type AfterViewInit,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'child-comp',
  template: `<p>Привіт {{ name }}</p>`,
})
export default class ChildComponent
  implements
    OnInit,
    DoCheck,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit
{
  @Input()
  protected name = '';

  protected count = 1;

  public ngOnInit() {
    this.log('ngOnInit');
  }

  public ngOnChanges() {
    this.log('OnChanges');
  }

  public ngDoCheck() {
    this.log('ngDoCheck');
  }

  public ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  public ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  public ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  public ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  private log(msg: string) {
    console.log(this.count + '. ' + msg);
    this.count++;
  }
}
