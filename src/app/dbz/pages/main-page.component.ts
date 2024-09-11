import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  public personajes: Character[] = [{ nombre: 'krillin', poder: 200 }, { nombre: 'Goku', poder: 10000 }]
  public personasNuevo: Character = { nombre: '', poder: 0 }

  addCharacter() {
    this.personajes.push({ nombre: this.personasNuevo.nombre, poder: this.personasNuevo.poder });
    this.personasNuevo = { nombre: '', poder: 0 };
  }

}
