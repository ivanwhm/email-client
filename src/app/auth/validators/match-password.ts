import { FormGroup, ValidationErrors, Validator } from '@angular/forms';

export class MatchPassword implements Validator {
  validate(formGroup: FormGroup): ValidationErrors {
    const { password, passwordConfirmation } = formGroup.value;

    if (password !== passwordConfirmation) {
      return { passwordsDoNotMatch: true };
    }

    return null;
  }
}
