import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home/home.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chrono';
}
