import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IResponse, IUser } from '../models/IUser';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { IUserRole } from '../models/IUser-Role';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser = {
    password: '',
    userName: '',
    role: ''
  }



  constructor(
    private fb:FormBuilder,
    private http:HttpClient,
    private toastr:ToastrService,
    private router:Router
  ) { }

  ngOnInit(): void {}


  fncLogin() {
    if(this.user.userName === undefined || this.user.userName === ""){
      this.toastr.error("Username can not be null!")
    }else if(this.user.password === undefined || this.user.password === ""){
      this.toastr.error("Password can not be null!")
    }else{

        const url = 'http://localhost:8082/api/users/login';

        const sendParams = {
          userName: this.user.userName,
          password: this.user.password
        }

        this.http.post<IUserRole>(url, sendParams).subscribe(
          (response) => {
            const success = response.success
            this.toastr.success("Login successfull!")
            this.user.role = response.data?.role
            if(success === true){

                const us = this.user
                if( us ) {
                  const stUs = JSON.stringify(us);
                  sessionStorage.setItem('user', stUs);
                }
                this.router.navigate(['/weatherconditions'])
            }
          },
          (error) => {
            this.toastr.error("Incorrect login!")
            console.error('error', error);
          });
      }
  }

}
