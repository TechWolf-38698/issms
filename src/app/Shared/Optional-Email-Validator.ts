import { AbstractControl, Validators } from '@angular/forms';

export function OptionalEmailValidator(control: AbstractControl): any | null {
  if (control.value !== '') {
    const valid = Validators.pattern('\b[w.-]+@[w.-]+.w{2,4}\b');
    return valid;
  }
  else re
}
