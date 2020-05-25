import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from "@angular/forms";

@Directive({
  selector: '[range]',
  providers: [{provide: NG_VALIDATORS, useExisting: RangeDirective, multi: true}]
})
export class RangeDirective implements Validator {
  @Input() min: number = Number.MIN_VALUE;
  @Input() max: number = Number.MAX_VALUE;
  @Input() digits: number = 1;
  @Input() distinct: boolean = true;
  @Input() repeated: Array<number> = [];

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return rangeValidator(this)(control);
  }
}

function getDigitSize(value: number): number {
  let size = 0;
  value = value < 0 ? -value : value;
  while (value > 0) {
    value = Math.floor(value / 10);
    size++;
  }
  return size;
}

function distinct(value: number): boolean {
  let size = 0;
  let digits: Map<number, boolean> = new Map<number, boolean>();
  value = value < 0 ? -value : value;
  while (value > 0) {
    let digit = value % 10;
    digits.set(digit, true);
    value = Math.floor(value / 10);
    size++;
  }
  return size == digits.size;
}

function rangeValidator(params: any): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let errors: any = {};
    let value = Number(control.value);
    let numOfDigits = getDigitSize(value);
    if (params.distinct && !distinct(value))
      errors.distinct = true;
    if (numOfDigits != params.digits)
      errors.digits = true;
    if (value < params.min || value > params.max) {
      errors.range = true;
    }
    if (params.repeated.includes(value)) {
      errors.repeated = true;
    }
    if (errors.hasOwnProperty('digits') || errors.hasOwnProperty('range') || errors.hasOwnProperty('distinct') || errors.hasOwnProperty('repeated'))
      return errors;
    return null;
  };
}
