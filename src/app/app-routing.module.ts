import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import  { UpdateComponent} from './update/update.component'
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {path : '' , redirectTo : 'register', pathMatch  : 'full'},
  {path : 'login' ,    component : LoginComponent} ,
  {path : 'register' , component : RegisterComponent},
  {path : 'home' ,  component : HomeComponent},
  {path : 'update/:id' ,  component : UpdateComponent},
  {path : 'addUser' , component:AddUserComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
