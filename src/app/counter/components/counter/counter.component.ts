import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
  <h3> Counter: {{ counter }}</h3>

<button (click)="incrementar(+1)" >+1</button>
<button (click)="resetear()"> RESETEAR</button>
<button (click)="incrementar(-1)" >-1</button>
<hr>
  `
})

export class CounterComponent {
  public counter: number = 0;

  incrementar( value: number ):void {
    this.counter += value;
  }
  resetear():void {
    this.counter =0;
  }
}
