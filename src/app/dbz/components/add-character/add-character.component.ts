import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  @Input() Character: Character = { nombre: '', poder: 0 };
  @Output() OnNewCharacter: EventEmitter<Character> = new EventEmitter();
  emitCharacter(): void {
    this.OnNewCharacter.emit(this.Character);
    this.Character = { nombre: '', poder: 0 };
  }
}
