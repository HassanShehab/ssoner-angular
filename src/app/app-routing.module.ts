import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmbulComponent } from './ambul/ambul.component';
import { FireComponent } from './fire/fire.component';
import { GustComponent } from './gust/gust.component';
import { HomeComponent } from './home/home.component';
import { LandpageComponent } from './landpage/landpage.component';
import { LoginComponent } from './login/login.component';
import { PoliceComponent } from './police/police.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path : "home", component : HomeComponent},
  {path : "", component : HomeComponent},
  {path : "login", component : LoginComponent},
  {path : "sign up", component : SignupComponent},
  {path : "gust", component : GustComponent},
  {path : "land", component : LandpageComponent},
  {path : "police", component : PoliceComponent},
  {path : "ambulance", component : AmbulComponent},
  {path : "fire station", component : FireComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
