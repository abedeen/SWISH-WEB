import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-page10',
  templateUrl: './page10.component.html',
  styleUrls: ['./page10.component.css']
})
export class Page10Component implements OnInit {
  isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup:FormGroup;
    constructor(private _formBuilder: FormBuilder) { }

      ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
          firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
          secondCtrl: ['', Validators.required]
        });
        this.thirdFormGroup = this._formBuilder.group({
          thirdCtrl: ['', Validators.required]
        });
      }
    }
