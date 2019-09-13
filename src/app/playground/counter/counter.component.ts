import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor() { }
  
  counter: number;

  ngOnInit() {
    this.counter = 1;
  }

  increaseCounter(): void {
    this.counter += 1;
  }

  decreaseCounter(): void {
    if (this.counter > 1) {
      this.counter -= 1;
    }
  }

}
