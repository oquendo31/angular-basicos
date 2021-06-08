import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Gokú',
      poder: 15000
    },
    {
      nombre: 'Vegueta',
      poder: 7500
    }
  ];
  nuevo: Personaje = {
    nombre: 'Maestro roshi',
    poder: 1000
  }

  agregarNuevoPersonaje(argumento: Personaje) {
    this.personajes.push(argumento);
  }

}
