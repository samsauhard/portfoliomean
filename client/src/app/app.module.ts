import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { BasePageComponent } from './partials/base-page/base-page.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProjectComponent } from './pages/project/project.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ContactDeleteComponent } from './contacts/contact-delete/contact-delete.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';

import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import { JwtModule, JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';



export function jwtTokenGetter() {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasePageComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ProjectComponent,
    DocumentsComponent,
    ContactComponent,
    PagenotfoundComponent,
    ContactDeleteComponent,
    ContactDetailsComponent,
    ContactListComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports:[
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  HttpClientModule,
  FlashMessagesModule,
  JwtModule.forRoot({
    config: {
      tokenGetter: jwtTokenGetter
    }
  })
],
providers: [FlashMessagesService],
bootstrap: [AppComponent]
})
export class AppModule { }
