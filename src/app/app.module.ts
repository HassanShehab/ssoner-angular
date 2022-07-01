import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LandpageComponent } from './landpage/landpage.component';
import { SignupComponent } from './signup/signup.component';
import { PoliceComponent } from './police/police.component';
import { GustComponent } from './gust/gust.component';
import { AmbulComponent } from './ambul/ambul.component';
import { FireComponent } from './fire/fire.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    LandpageComponent,
    SignupComponent,
    PoliceComponent,
    GustComponent,
    AmbulComponent,
    FireComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
