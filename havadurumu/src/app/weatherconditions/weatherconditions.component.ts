import { Component, OnInit } from '@angular/core';
import { ICity, ICityList } from '../models/ICity';
import { HttpClient } from '@angular/common/http';
import { IUser1, IUserList } from '../models/IUser';
import { Welcome } from '../models/IWeatherreport';


@Component({
  selector: 'app-weatherconditions',
  templateUrl: './weatherconditions.component.html',
  styleUrls: ['./weatherconditions.component.css']
})
export class WeatherconditionsComponent implements OnInit {

  allCity:ICity[] = []
  allUser:IUserList[] = []

  temperature:any = {
    temp : '',
    desc : ''
  }


  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.fncAllCity(),
    this.fncAllUser()
  }

  selectedCity: string | undefined;
  printedCity: string | undefined;

  printCity() {
    this.printedCity = this.selectedCity;
    return this.printUser()
  }

  selectedUser: string | undefined;
  printedUser: string | undefined;

  printUser() {
    this.printedUser = this.selectedUser;
    return this.fncWeatherCondition()
  }

  fncAllCity(){
    const url = 'http://localhost:8082/api/cities/getall'
  
    this.http.get<ICityList>(url).subscribe(
      (res) =>{
        this.allCity = res.data
        //console.log(this.allUser)
       // console.log( res )
      },
      (error) => {
        console.log('error')
      }
    )
  }

  fncAllUser(){
    const url = 'http://localhost:8082/api/users/getall'
  
    this.http.get<IUser1>(url).subscribe(
      (res) =>{
        //console.log(this.allUser)
        this.allUser = res.data
        console.log( this.allUser )
      },
      (error) => {
        console.log('error')
      }
    )
  }


  fncWeatherCondition(){
    //http://localhost:8082/api/onlineweatherinquires/citynameweatherinquiry?city=İstanbul&userName=Berkay
    const sendParams = {
      city : this.printedCity,
      userName : this.printedUser
    }
    const url = 'http://localhost:8082/api/onlineweatherinquires/citynameweatherinquiry?city=' + sendParams.city + '&userName=' + sendParams.userName;
    //const url1 = `http://localhost:8082/api/onlineweatherinquires/citynameweatherinquiry?city=${sendParams.city}&userName=${sendParams.userName}`

    
    this.http.post<Welcome>(url , sendParams).subscribe(
      (response) => {
        this.temperature.temp = response.data.main.temp
        this.temperature.desc = response.data.weather[0].main
        console.log(response.data.main.temp)
      },
      (error) => {
        console.error('error', error);
      });
  }

}
