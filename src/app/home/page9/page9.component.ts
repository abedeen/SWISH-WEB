import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-page9',
  templateUrl: './page9.component.html',
  styleUrls: ['./page9.component.css']
})
export class Page9Component implements OnInit {
  emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

    matcher = new MyErrorStateMatcher();
  constructor() { }

  ngOnInit() {
  }

}
