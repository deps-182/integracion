import { FormControl } from "@angular/forms";

export interface logInForm {
    email: FormControl<string>;
    password: FormControl<string>;
  }