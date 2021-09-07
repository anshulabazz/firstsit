import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AdditemComponent } from './additem/additem.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UpcomingfifthComponent } from './upcomingfifth/upcomingfifth.component';
import { UpcomingfirstComponent } from './upcomingfirst/upcomingfirst.component';
import { UpcomingfourthComponent } from './upcomingfourth/upcomingfourth.component';
import { UpcomingsecComponent } from './upcomingsec/upcomingsec.component';
import { UpcomingthirdComponent } from './upcomingthird/upcomingthird.component';

const routes: Routes = [
  
 
 
  { path: 'upcoming-first-match', component: UpcomingfirstComponent },
  { path: 'upcoming-sec-match', component: UpcomingsecComponent },
  { path: 'upcoming-third-match', component: UpcomingthirdComponent },
  { path: 'upcoming-fourth-match', component: UpcomingfourthComponent },
  { path: 'upcoming-fifth-match', component: UpcomingfifthComponent },
  { path: 'match-upcoming', component: HomeComponent },
  { path: 'login-user', component: LoginComponent},
  { path: '', component: MainComponent },
 
  { path: '**', component: PagenotfoundComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
