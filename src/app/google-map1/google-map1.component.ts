import { Component, OnInit } from '@angular/core';
@Component({
selector: 'app-google-map1',
  styles: [`
    agm-map {
      height: 300px;
    }
  `],
  template: `
  <agm-map [latitude]="lat" [longitude]="lng"></agm-map>
  `
})

export class GoogleMap1Component implements OnInit {
lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
