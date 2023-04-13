import { Component, OnInit } from '@angular/core';
import { Hero } from './../../models/Hero';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent {

  heros:Hero [];

  constructor() {}

  ngOnInit(): void {
     this.heros = [
      {
      content: 'First',
      completed: false
      },
      {
      content: 'Second',
      completed: true
      }
     ]
  }

}
