import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfiledetailsComponent } from './profiledetails/profiledetails.component';
import { CommonService} from './common.service';
import { HttpClientModule } from '@angular/common/http';

var obj=[
  { path: '',    redirectTo: '/dashboard', pathMatch: 'full'  },
  {path:"dashboard",component:DashboardComponent,
    children:[
    {path:"Login",component:LoginComponent},
    {path:"registration",component:RegistrationComponent}

  ]},
  {path:"profiledetails",component:ProfiledetailsComponent}

]

var route = RouterModule.forRoot(obj)

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    ProfiledetailsComponent,

  ],
  imports: [
    BrowserModule,route,FormsModule,HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
