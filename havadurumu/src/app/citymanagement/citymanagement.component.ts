import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICity, ICityList, ICityResponse } from '../models/ICity';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { IDeleteRes } from '../models/IUser';
import { NgxSmartModalService } from 'ngx-smart-modal';


@Component({
  selector: 'app-citymanagement',
  templateUrl: './citymanagement.component.html',
  styleUrls: ['./citymanagement.component.css']
})
export class CitymanagementComponent implements OnInit {

  search = ''
  faTrash = faTrash

  city:ICity = {
    cityName: '',
    id: ''
  }

  oldAllCity:ICity[] = []
  allCity:ICity[] = []

  constructor(
    private http:HttpClient,
    private toastr:ToastrService,
    public ngxSmartModalService: NgxSmartModalService
  ) { }

  ngOnInit(): void {
    this.fncAllCity()
  }

  fncSearch(){
    //console.log(this.oldAllUserName)
    this.allCity = this.oldAllCity
    const s = this.search.toLocaleLowerCase()
    this.allCity = this.allCity.filter( item => item.cityName?.toLocaleLowerCase().includes(s))
  }

  fncAllCity(){
    const url = 'http://localhost:8082/api/cities/getall'
  
    this.http.get<ICityList>(url).subscribe(
      (res) =>{
        this.allCity = res.data
        this.oldAllCity = res.data 
        console.log(this.oldAllCity)
        //console.log(this.allCity)
      },
      (error) => {
        console.log('error')
      }
    )
  }

  fncCityAdd(){

    if(this.city.cityName === undefined || this.city.cityName === ""){
      this.toastr.error("City can not be null!")
    }else{

      this.toastr.success("Successful!")

      const url = 'http://localhost:8082/api/cities/add';

      const sendParams = {
        cityName: this.city.cityName,
      }
      this.http.post<ICityResponse>(url, sendParams).subscribe(
        (response) => {
          const success = response.success
          if(success === true){
              console.log(response)
              this.fncAllCity()
              this.ngxSmartModalService.getModal('myModal').close();
          //    let berkay = {id: 'dfgdfgdfgdgdfg', cityName: sendParams.cityName}
          //    this.allCity.push(berkay)
          }
        },
        (error) => {
          console.error('error', error);
        });
    }
  }

  fncRemove( cityID:string ) {
    //console.log(adresID)
    const answer = confirm("Are you sure!")
    if(answer){
    const url = 'http://localhost:8082/api/cities/delete';

    const sendParams = {
      id: cityID
    }

    this.http.post<IDeleteRes>(url, sendParams ).subscribe(
      (response) => {
        //console.log(response.message)
        this.fncAllCity()
      },
      (error) => {
        console.error('error', error);
      });

    }
  }
}

