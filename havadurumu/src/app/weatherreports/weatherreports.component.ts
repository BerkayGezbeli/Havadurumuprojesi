import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICity, ICityList } from '../models/ICity';
import { IUser1, IUserList } from '../models/IUser';

@Component({
  selector: 'app-weatherreports',
  templateUrl: './weatherreports.component.html',
  styleUrls: ['./weatherreports.component.css']
})
export class WeatherreportsComponent implements OnInit {

  allCity:ICity[] = []
  allUser:IUserList[] = []


  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.fncAllCity(),
    this.fncAllUser()
  }

  fncAllCity(){
    const url = 'http://localhost:8082/api/cities/getall'
  
    this.http.get<ICityList>(url).subscribe(
      (res) =>{
        this.allCity = res.data
        //console.log(this.allUser)
        console.log( res )
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
  

}
