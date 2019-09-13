import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-name',
  templateUrl: './my-name.component.html',
  styleUrls: ['./my-name.component.scss']
})
export class MyNameComponent implements OnInit {

  constructor() { }

  name: string;

  ngOnInit() {
    this.name = "John Rambo";
  }

}
