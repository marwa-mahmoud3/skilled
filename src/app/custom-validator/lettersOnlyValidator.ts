import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function lettersOnlyValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if(control.value.length > 0 ){
      const valid = /^[a-zA-Z]+$/.test(control.value);
      return valid ? null : { lettersOnly: true };
    }
    else
      return null;
  };
}
