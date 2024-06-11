import { Component, OnInit,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../producto.service';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})


export class ProductoComponent {
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
  producto = {
    nombre: 'Eterno Resplandor',
    descripcion: 'El anillo Eterno Resplandor es una obra maestra de la joyería moderna, diseñado para aquellos que aprecian la belleza atemporal y el lujo exquisito. Fabricado en oro de 18 quilates, este anillo presenta un deslumbrante zafiro azul profundo como piedra central, rodeado por un delicado halo de diamantes brillantes que realzan su resplandor natural. Los detalles intrincados en el diseño del anillo, junto con su impecable acabado, lo convierten en una joya verdaderamente única y memorable, perfecta para ocasiones especiales o como símbolo de un amor eterno.',
    precio: 5199990,
    imagen: 'assets/anillooro.webp',
  };


}