import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { SearchFilterPipe } from './search-filter.pipe';
import {  HttpClientModule , HttpClient} from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';
//
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UpdateComponent,
    SearchFilterPipe,
    AddUserComponent,
   
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
