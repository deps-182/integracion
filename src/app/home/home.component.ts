import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent implements OnInit{

  private authService = inject(AuthService);
  private router = inject(Router);

  isLoggedIn$: Observable<boolean>;

  constructor() {
    this.isLoggedIn$ = this.authService.authState$.pipe(map(user => !!user));
  }

  ngOnInit(): void {}

  async logOut(): Promise<void> {
    try{
      await this.authService.logOut();
      this.router.navigateByUrl('/');
    } catch (error) {
      console.log(error);
    } 
  }
}
