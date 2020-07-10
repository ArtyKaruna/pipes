import { Pipe, PipeTransform } from '@angular/core';
import { NumberUtils } from '../../utils/number-utils';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(values: number[]): number {
    return NumberUtils.sum(values);
  }

}
