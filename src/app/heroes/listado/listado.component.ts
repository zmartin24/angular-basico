import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes          : string[] = ['Capitán América', 'Iroman', 'Thor', 'Hulk', 'Ojo de Alcón', 'Black Widow'];
  heroeBorrado    : string = '';

  borrarHeroe(): void{
    this.heroeBorrado = this.heroes.shift()?.toString()|| '';
    console.log(this.heroeBorrado);
  }

}
