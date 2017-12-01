import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  isDisabled: boolean = false;
    clickCounter: number = 0;
    toggleDisable: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
