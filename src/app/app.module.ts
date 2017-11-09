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
import {MatSidenavModule} from '@angular/material';
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
import { GoogleMap1Component } from './google-map1/google-map1.component';
const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidenavOverviewComponent,
    GoogleMap1Component,
  ],
  imports: [BrowserAnimationsModule,NoopAnimationsModule,MatSidenavModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBE0PR7Wl64nnbDyPuJ7PsQaiG_obiDG-0'
    }),
    ArticleModule,
    AuthModule,
    EditorModule,
    HomeModule,
    ProfileModule,
    rootRouting,
    SharedModule,
    SettingsModule,
  ],
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
