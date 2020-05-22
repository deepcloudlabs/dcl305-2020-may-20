import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'plus'
})
export class PlusPipe implements PipeTransform {

  transform(value: number, fixSign: boolean = true): string {
    if (value == 0) return "0";
    if (fixSign) {
      if (value < 0) value = -value;
    }
    return "+" + value;
  }

}
