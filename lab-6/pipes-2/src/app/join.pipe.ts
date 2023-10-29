import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
  pure: false,
})
export default class JoinPipe implements PipeTransform {
  public transform<TElement>(array: TElement[], start?: number, end?: number) {
    let result = array;

    if (start !== undefined) {
      if (end !== undefined) {
        result = array.slice(start, end);
      } else {
        result = array.slice(start, result.length);
      }
    }

    return result.join(', ');
  }
}
