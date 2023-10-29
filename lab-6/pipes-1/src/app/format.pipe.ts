import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'format',
})
export default class FormatPipe implements PipeTransform {
  public transform(value: number): string {
    return value.toString().replace('.', ',');
  }
}
