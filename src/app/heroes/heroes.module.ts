import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

// import { Heroe1Component } from './heroe1/heroe1.component';



@NgModule({
  declarations:
   [HeroeComponent,
    ListadoComponent],
    exports:[
        ListadoComponent
    ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }