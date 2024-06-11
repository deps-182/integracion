import { Component } from '@angular/core';
import HomeComponent from '../home/home.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HomeComponent, RouterModule, FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
