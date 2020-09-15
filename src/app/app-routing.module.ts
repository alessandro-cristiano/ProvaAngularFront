import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent}  from './home/home.component';
import {UserComponent}  from './user/user.component';
import {AddUserComponent}  from './add-user/add-user.component';


const routes: Routes = [
                        {path:"",component:HomeComponent},
                        {path:"lista", component:UserComponent},
                        {path:'addUser', component: AddUserComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
