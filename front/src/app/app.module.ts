import { BrowserModule } from '@angular/platform-browser';
import {ClassProvider, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from "./auth-interceptor";

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {LoginService} from "./services/login.service";
import {ApiService} from "./services/api.service";
import {SignupService} from "./services/signup.service";


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Material Components
import {MatDividerModule, MatSelectModule, MatToolbarModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatStepperModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material';

// Components
import {LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginHeaderComponent } from './components/login-header/login-header.component';
import { NormalHeaderComponent } from './components/normal-header/normal-header.component';
import { HomePostsComponent } from './components/home-posts/home-posts.component';
import { BooksComponent } from './components/books/books.component';
import {UserDataService} from "./services/user-data.service";
import { ProfileComponent } from './components/profile/profile.component';
import { FeedComponent } from './components/feed/feed.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LoginHeaderComponent,
    NormalHeaderComponent,
    HomePostsComponent,
    BooksComponent,
    ProfileComponent,
    FeedComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,

    //  Material components
    MatToolbarModule,
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
    MatCardModule,


    AppRoutingModule,
    MatDividerModule,
    MatSelectModule

  ],
  providers: [LoginService, ApiService, UserDataService, SignupService,
    <ClassProvider> {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
