import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule, UserComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})

export class AdminComponent {

}
