import { NgOptimizedImage } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

export type Provider = 'github' | 'google';

@Component({
  selector: 'app-button-providers',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './button-providers.component.html',
  styleUrl: './button-providers.component.scss'
})
export class ButtonProvidersComponent {
  @Input() isLogin = false;

  private _authService = inject(AuthService);
  private _router = inject(Router);

  providerAction(provider: Provider):void {
    if(provider == 'google'){
      this.signUpWithGoogle();
    }else{
      this.signUpWithGithub();
    }
  }

  async signUpWithGoogle(): Promise<void> {
    try{
      const result = await this._authService.signUpWithGoogleProvider();
      await this._authService.saveUser(result.user);
      this._router.navigateByUrl('/');
      console.log(result);
    }catch(error){
      console.log(error);
    }
  }

  async signUpWithGithub(): Promise<void> {
    try{
      const result = await this._authService.signUpWithGithubProvider();
      await this._authService.saveUser(result.user);
      this._router.navigateByUrl('/');
      console.log(result);
    }catch(error){
      console.log(error);
    }
  }
}
