import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AdditemComponent } from './additem/additem.component';
import { AdminsComponent } from './admins/admins.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'admins', component: AdminsComponent },
  { path: 'additems', component: AdditemComponent },
  { path: 'add', component: AddComponent },
  { path: '', component: HomeComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
