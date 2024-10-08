import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  public title: string = 'Angular-intro';
  public subtitle: string = 'Mi proyecto'
  public counter: number = 30;

  increaseBy(value: number): void {
    this.counter = this.counter + value;
  }
  reset(): void {
    this.counter = 0;
  }

}

