import { Injectable } from '@angular/core';
import { v4 } from 'uuid';

import { Character } from '../interfaces/character.interface';

// console.log(v4());

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    nombre: 'krillin',
    poder: 200
  }
    ,
  {
    id: uuid(),
    nombre: 'Goku',
    poder: 10000
  }]

  addCharacter(character: Character) {
    this.characters.push({ ...character, id: uuid() });
  }
  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(x => !(x.id == id));
  }

  constructor() { }

}
function uuid(): string {
  return v4();
}

