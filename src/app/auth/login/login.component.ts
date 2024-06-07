import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Credential } from '../../interfaces/credential';
import { Router, RouterModule } from '@angular/router';
import { logInForm } from '../../interfaces/log-in-form';
import { ButtonProvidersComponent } from '../components/button-providers/button-providers.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule,ButtonProvidersComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  hide = true;

  formBuilder = inject(FormBuilder);

  private authService = inject(AuthService);
  private router = inject(Router);

  form: FormGroup<logInForm> = this.formBuilder.group({
    email: this.formBuilder.control('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    password: this.formBuilder.control('', {
      validators: Validators.required,
      nonNullable: true,
    })
  });

  async logIn(): Promise<void> {
    if (this.form.invalid) return;
    const credential: Credential = {
      email: this.form.value.email || '',
      password: this.form.value.password || '',
    }
    try{
      await this.authService.logInWithEmailAndPassword(credential);
      this.router.navigateByUrl('/');
    }catch(error){
      console.error(error);
    }
  }
}
