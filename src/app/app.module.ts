import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AdminsComponent } from './admins/admins.component';
import { AdditemComponent } from './additem/additem.component';
import {MatButtonModule} from '@angular/material/button';
import { AddComponent } from './add/add.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { FirebaseService } from './firebase.service';
import {AngularFireDatabaseModule } from '@angular/fire/database'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminsComponent,
    AdditemComponent,
    AddComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule
      
    ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
