import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <p *ngIf="condition">Привіт світ!</p>
    <p *ngIf="!condition">Пока світ!</p>
    <p *ngIf="condition; else unset">Привіт Angular!</p>
    <ng-template #unset>
      <p>Пока Angular!</p>
    </ng-template>
    <div *ngIf="condition; then thenBlock; else elseBlock"></div>
    <ng-template #thenBlock>Then template</ng-template>
    <ng-template #elseBlock>Else template</ng-template>
    <br />
    <button (click)="toggle()">Toggle</button>
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
    <div [ngSwitch]="count">
      <ng-template ngSwitchCase="1">{{ count * 10 }}</ng-template>
      <ng-template ngSwitchCase="2">{{ count * 100 }}</ng-template>
      <ng-template ngSwitchDefault>{{ count * 1000 }}</ng-template>
    </div>
    <p *while="condition">Перший параграф</p>
    <p *while="!condition">Другий параграф</p>
  `,
})
export default class AppComponent {
  protected condition = true;

  protected toggle() {
    this.condition = !this.condition;
  }

  protected items = ['Tom', 'Bob', 'Sam', 'Bill'];

  protected count = 5;
}
