import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';
import HomeComponent from '../home/home.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule, UserComponent,HomeComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})

export class AdminComponent {

}
