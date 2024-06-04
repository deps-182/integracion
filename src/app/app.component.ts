import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule} from '@angular/common';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home/home.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'chrono';
}
