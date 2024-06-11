import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignUpForm } from '../../interfaces/sign-up-form';
import { AuthService} from '../../service/auth.service';
import { Credential } from '../../interfaces/credential';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface ExtendedCredential extends Credential {
  displayName: string;
}


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  hide = true;

  formBuilder = inject(FormBuilder);
  form: FormGroup<SignUpForm> = this.formBuilder.group({
    names: this.formBuilder.control('', {
      validators: [Validators.required, Validators.minLength(2)],
      nonNullable: true,
    }),
    lastName: this.formBuilder.control('', {
      validators: [Validators.required, Validators.minLength(2)],
      nonNullable: true,
    }),
    email: this.formBuilder.control('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    password: this.formBuilder.control('', {
      validators: [Validators.required, Validators.minLength(6)],
      nonNullable: true,
    }),
  });  

  private authService = inject(AuthService)
  private _router = inject(Router);

  async signUp(): Promise<void> {
    if (this.form.invalid) return;
    const credential: ExtendedCredential = {
      email: this.form.value.email || '',
      password: this.form.value.password || '',
      displayName: `${this.form.value.names} ${this.form.value.lastName}`,
    };
    try{
      const userCredentials = await this.authService.signUpWithEmailAndPassword(credential)
      console.log(userCredentials)
      this._router.navigateByUrl('/')
    }catch (error){
      console.error(error);
    }
  }
}
