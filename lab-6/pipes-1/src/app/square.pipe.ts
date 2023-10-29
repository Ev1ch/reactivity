import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'square',
})
export default class SquarePipe implements PipeTransform {
  public transform(value: number) {
    return Math.pow(value, 2);
  }
}
