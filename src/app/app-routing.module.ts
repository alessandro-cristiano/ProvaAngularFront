import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent}  from './home/home.component';
import {AddUserComponent}  from './add-user/add-user.component';
import {UpdateUserComponent}  from './update-user/update-user.component';
import {UserListComponent}  from './user-list/user-list.component';


const routes: Routes = [
                        {path:"",component:HomeComponent},
                        {path:"lista", component:UserListComponent},
                        {path:"update-user/:codice", component:UpdateUserComponent},
                        {path:'addUser', component: AddUserComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
