import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() personajes: Character[] = []
  @Output() DeleteCharacter: EventEmitter<number> = new EventEmitter();


  deleteCharacter(index: number) {
    this.DeleteCharacter.emit(index);
  }
}


