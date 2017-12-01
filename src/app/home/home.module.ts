import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeAuthResolver } from './home-auth-resolver.service';
import { SharedModule } from '../shared';
import { GoogleMapsComponent } from '../shared/google-maps/google-maps.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { DirectionsMapDirective } from './directions-map.directive';
import { PageWelcomeComponent } from './page-welcome/page-welcome.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { RideeSession1Component } from './ridee-session1/ridee-session1.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { DemoComponent } from './demo/demo.component';
import { Page3Component } from './page3/page3.component';
import { FormFieldOverviewExampleComponent } from './form-field-overview-example/form-field-overview-example.component';
//import { SignUpComponent } from './sign-up/sign-up.component';
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
    path: 'screen1',
    component: PageWelcomeComponent,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'screen2',
    component: GettingStartedComponent,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'screen3',
    component: WelcomeUserComponent,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'screen4',
    component: RideeSession1Component,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'screen5',
    component: WelcomeScreenComponent,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'page1',
    component: Page1Component,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'page2',
    component: Page2Component,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'page3',
    component: Page3Component,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'page3',
    component: Page3Component,
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
    WelcomeScreenComponent,
    DirectionsMapDirective,
    PageWelcomeComponent,
    GettingStartedComponent,
    WelcomeUserComponent,
    RideeSession1Component,
    Page1Component,
    Page2Component,
    DemoComponent,
    Page3Component,
    FormFieldOverviewExampleComponent
  ],
  providers: [
    HomeAuthResolver
  ]
})
export class HomeModule {}
