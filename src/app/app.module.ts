import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

import { MatDividerModule } from '@angular/material/divider';
import { AdditemComponent } from './additem/additem.component';
import {MatButtonModule} from '@angular/material/button';
import { AddComponent } from './add/add.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { FirebaseService } from './firebase.service';
import {AngularFireDatabaseModule } from '@angular/fire/database';
import { UpcomingfirstComponent } from './upcomingfirst/upcomingfirst.component';
import { UpcomingsecComponent } from './upcomingsec/upcomingsec.component';
import { UpcomingthirdComponent } from './upcomingthird/upcomingthird.component';
import { UpcomingfourthComponent } from './upcomingfourth/upcomingfourth.component';
import { UpcomingfifthComponent } from './upcomingfifth/upcomingfifth.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component'
import { FirebaseauthserviceService } from './firebaseauthservice.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
    HomeComponent,
  
    AdditemComponent,
    AddComponent,
    UpcomingfirstComponent,
    UpcomingsecComponent,
    UpcomingthirdComponent,
    UpcomingfourthComponent,
    UpcomingfifthComponent,
    MainComponent,
    LoginComponent,
    PagenotfoundComponent,
    FooterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule
      
    ],
  providers: [FirebaseService, FirebaseauthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
