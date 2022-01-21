import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre  : string = 'Iroman';
    edad    : number = 39;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void{
        console.log('Cambia nombre');
        this.nombre = 'Spiderman';
    }
    cambiarEdad() : void{
        this.edad = 18;
    }
}