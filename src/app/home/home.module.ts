import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeAuthResolver } from './home-auth-resolver.service';
import { SharedModule } from '../shared';
import { GoogleMapsComponent } from '../shared/google-maps/google-maps.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

import { SignupComponent } from './signup/signup.component';
import { Starup2Component } from './starup2/starup2.component';
import { DirectionsMapDirective } from './directions-map.directive';
const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'showMap',
    component: HomeComponent,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'welcome',
    component: WelcomeScreenComponent,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'signup',
    component: SignupComponent,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'startup',
    component: Starup2Component,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  }
]);

@NgModule({
  imports: [
    homeRouting,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    WelcomeScreenComponent
  ],
  providers: [
    HomeAuthResolver
  ]
})
export class HomeModule {}
