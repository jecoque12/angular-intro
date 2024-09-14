import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() characters: Character[] = []
  @Output() DeleteCharacter: EventEmitter<string> = new EventEmitter();


  deleteCharacter(index: string) {
    this.DeleteCharacter.emit(index);
  }
}


