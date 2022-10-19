import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { CitymanagementComponent } from './citymanagement/citymanagement.component';
import { WeatherconditionsComponent } from './weatherconditions/weatherconditions.component';
import { WeatherreportsComponent } from './weatherreports/weatherreports.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'usermanagement', component: UsermanagementComponent},
  {path:'citymanagement', component:CitymanagementComponent},
  {path:'weatherconditions', component:WeatherconditionsComponent},
  {path:'weatherreports', component:WeatherreportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
