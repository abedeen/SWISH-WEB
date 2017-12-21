import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';
import { AuthModule } from './auth/auth.module';
import { EditorModule } from './editor/editor.module';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { SettingsModule } from './settings/settings.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule ,MatSelectModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {
  ApiService,
  ArticlesService,
  AuthGuard,
  CommentsService,
  FooterComponent,
  HeaderComponent,
  JwtService,
  ProfilesService,
  SharedModule,
  TagsService,
  UserService
} from './shared';
import { SidenavOverviewComponent } from './sidenav-overview/sidenav-overview.component';
//import {SlideToggleOverviewExample} from './slide-toggle-overview-example';
import { FormFieldOverviewExampleComponent } from './form-field-overview-example/form-field-overview-example.component';
import { Page5Component } from './page5/page5.component';
import { Page14Component } from './page14/page14.component';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });
@NgModule({
  declarations: [
    AppComponent, 
    FooterComponent,
    HeaderComponent,
    SidenavOverviewComponent,
    FormFieldOverviewExampleComponent,
    Page5Component,
    Page14Component
  ],

  imports: [BrowserAnimationsModule,NoopAnimationsModule,MatSidenavModule,MatFormFieldModule,MatSelectModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD_yJZiosmZ7kPX90TJAChGvllyZcow17E',
      libraries: ["places"]
    }),
    ArticleModule,
    AuthModule,
    EditorModule,
    HomeModule,
    ProfileModule,
    rootRouting,
    SharedModule,
    SettingsModule,  ],
  providers: [
    ApiService,
    ArticlesService,
    AuthGuard,
    CommentsService,
    JwtService,
    ProfilesService,
    TagsService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
