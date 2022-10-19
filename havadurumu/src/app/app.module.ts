import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { HeaderComponent } from './inc/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './inc/navbar/navbar.component';
import { CitymanagementComponent } from './citymanagement/citymanagement.component';
import { WeatherconditionsComponent } from './weatherconditions/weatherconditions.component';
import { WeatherreportsComponent } from './weatherreports/weatherreports.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsermanagementComponent,
    HeaderComponent,
    NavbarComponent,
    CitymanagementComponent,
    WeatherconditionsComponent,
    WeatherreportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    NgxSmartModalModule.forRoot(),
    MatExpansionModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
