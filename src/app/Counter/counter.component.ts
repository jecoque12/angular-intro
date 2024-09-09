import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})

export class CounterComponent implements OnInit {
  public title: string = 'Angular-intro';
  public subtitle: string = 'Mi proyecto'
  public counter: number = 30;
  increaseBy(value: number): void {
    this.counter = this.counter + value;
  }
  reset(): void {
    this.counter = 0;
  }

  ngOnInit() { }
}
