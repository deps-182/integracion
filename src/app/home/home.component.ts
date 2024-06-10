import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

  private authService = inject(AuthService);
  private router = inject(Router);

  async logOut(): Promise<void> {
    try{
      await this.authService.logOut();
      this.router.navigateByUrl('/log-in');
    } catch (error) {
      console.log(error);
    } 
  }
}
