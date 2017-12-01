import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-form-field-overview-example',
  templateUrl: './form-field-overview-example.component.html',
  styleUrls: ['./form-field-overview-example.component.css']
})
export class FormFieldOverviewExampleComponent implements OnInit {
  isDisabled: boolean = false;
    clickCounter: number = 0;
    toggleDisable: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
