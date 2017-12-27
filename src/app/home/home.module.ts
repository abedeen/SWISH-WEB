import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatInputModule,
  MatNativeDateModule,
  MatIconModule,
  MatDatepickerModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatSelectModule,
 MatStepperModule} from '@angular/material';
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
//import { FormFieldOverviewExampleComponent } from './form-field-overview-example/form-field-overview-example.component';
import { Page5Component } from './page5/page5.component';
import { Page6Component } from './page6/page6.component';
import { Page7Component } from './page7/page7.component';
import { Page8Component } from './page8/page8.component';
import { Page9Component } from './page9/page9.component';
import { Page10Component } from './page10/page10.component';
import { Page11Component } from './page11/page11.component';
import { Page12Component } from './page12/page12.component';
import { Page13Component } from './page13/page13.component';
import { Page14Component } from './page14/page14.component';
import { Page15Component } from './page15/page15.component';
import { Page16Component } from './page16/page16.component';
import { Page17Component } from './page17/page17.component';
import { Page18Component } from './page18/page18.component';
import { Page19Component } from './page19/page19.component';
import { Page20Component } from './page20/page20.component';
import { Page21Component } from './page21/page21.component';
import { Page22Component } from './page22/page22.component';
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
    path: 'pricingforrider',
    component: WelcomeScreenComponent,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'weeklySchedule',
    component: Page1Component,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'profile',
    component: Page2Component,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'address',
    component: Page3Component,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'pricingandpayments',
    component: DemoComponent,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'driverinfo',
    component: Page5Component,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'carinfo',
    component: Page6Component,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'freecarpooling',
    component: Page7Component,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'notifications',
    component: Page8Component,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'createprofile',
    component: Page9Component,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'createpassword',
    component: Page10Component,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'createusername',
    component: Page11Component,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'usercontact',
    component: Page12Component,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'message',
    component: Page13Component,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'addCreditDetails',
    component: Page14Component,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'pricingfordriver',
    component: Page15Component,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'pickUpTime',
    component: Page16Component,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'riderPickUpTime',
    component: Page17Component,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'activity',
    component: Page18Component,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },
  {
    path: 'pricing',
    component: Page19Component,
    resolve: {
      isAuthenticated: HomeAuthResolver
    }
  },  {
      path: 'payments',
      component: Page20Component,
      resolve: {
        isAuthenticated: HomeAuthResolver
      }
    },
    {
        path: 'daySchedule',
        component: Page21Component,
        resolve: {
          isAuthenticated: HomeAuthResolver
        }
      },
      {
          path: 'dayScheduleMessage',
          component: Page22Component,
          resolve: {
            isAuthenticated: HomeAuthResolver
          }
        }

]);

@NgModule({
  imports: [
    homeRouting,
    SharedModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatStepperModule
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
  //  FormFieldOverviewExampleComponent,
    Page5Component,
    Page6Component,
    Page7Component,
    Page8Component,
    Page9Component,
    Page10Component,
    Page11Component,
    Page12Component,
    Page13Component,
    Page14Component,
    Page15Component,
    Page16Component,
    Page17Component,
    Page18Component,
    Page19Component,
    Page20Component,
    Page21Component,
    Page22Component
  ],
  providers: [
    HomeAuthResolver
  ]
})
export class HomeModule {}
