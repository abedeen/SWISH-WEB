import { Component, OnInit } from '@angular/core';
//import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css']
})
export class Page5Component implements OnInit {
  value1 = 'Clear me';
  state = [
      {value: 'active-0', viewValue: 'active'},
      {value: 'inactive', viewValue: 'inactive'}]
  constructor() { }

  ngOnInit() {
  }

}
