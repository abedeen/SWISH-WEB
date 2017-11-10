import { Component, OnInit ,NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
/*@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})*/

@Component({
    selector: 'app-google-maps',
  styles: [`
    agm-map {
      height: 90%;
    }
  `],
  template: `
  <agm-map [latitude]="lat" [zoom]="zoom" [longitude]="lng"></agm-map>
  `
})
export class GoogleMapsComponent implements OnInit {
lat: number =17.4096808
  lng: number = 78.4411289;
  zoom:number=18;
  constructor() { }
//31.6364708,77.3411289
  ngOnInit() {
  }

}
