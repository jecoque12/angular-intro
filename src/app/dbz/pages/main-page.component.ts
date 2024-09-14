import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  public personajes: Character[] = [{ nombre: 'krillin', poder: 200 }, { nombre: 'Goku', poder: 10000 }]

  addCharacter(character: Character) {
    this.personajes.push({ nombre: character.nombre, poder: character.poder });
  }
  deleteCharacter(index: number): void {
    this.personajes.splice(index, 1);
  }
}
