import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'minus'
})
export class MinusPipe implements PipeTransform {

  transform(value: number, fixSign: boolean = true): string {
    if (value == 0) return "0";
    if (fixSign)
       if (value < 0) return value.toString();
    return "-" + value;
  }

}
