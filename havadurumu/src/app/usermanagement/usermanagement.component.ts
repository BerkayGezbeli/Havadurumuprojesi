import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { IResponse, IUser1, IUserList } from '../models/IUser';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Datum, ISearch } from '../models/ISearch';
import { IDeleteRes } from '../models/IUser';
import { NgxSmartModalService } from 'ngx-smart-modal';




@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {

  search = ''
  faTrash = faTrash

  roles:any[] = [
    {role : "admin"},
    {role: "kullanıcı"}
  ]

  selectedRole: string | undefined;
  printedRole: string | undefined;

  user:IUserList = {
    userName: '',
    password: '',
    role: '',
  }

  password2 =''
  
  oldAllUser:Datum[] = []

  allUser:Datum[] = []

  constructor(
    private http:HttpClient,
    private toastr:ToastrService,
    public ngxSmartModalService: NgxSmartModalService

  ) { }

  ngOnInit(): void {
    this.fncAllUser()
  }

  printRole() {
    console.log(this.selectedRole)
  }

  fncSearch(){
    //console.log(this.oldAllUserName)
    this.allUser = this.oldAllUser
    const s = this.search.toLocaleLowerCase()
    this.allUser = this.allUser.filter( item => item.userName?.toLocaleLowerCase().includes(s))
  }


  fncAllUser(){
    const url = 'http://localhost:8082/api/users/getall'
  
    this.http.get<ISearch>(url).subscribe(
      (res) =>{
        this.allUser = res.data
        this.oldAllUser = res.data
        //for (let index = 0; index < res.data.length; index++) {
          //const element = array[index];
         // this.oldAllUserName.push(res.data[index].userName)
          //console.log(this.allUserName)
          //console.log(res.data[index].userName)
      //  }
       //console.log("allUser" ,  this.allUser )
       //console.log("res.data" , res.data[0].userName)
      },
      (error) => {
        console.log('error')
      }
    )
  }
  
   fncRegister(){

      if(this.user.userName === undefined || this.user.userName === ""){
        this.toastr.error("Name can not be null!")
      }else if(this.user.password === undefined || this.user.password === ""){
        this.toastr.error("Password can not be null!")
      }else if(this.password2 === undefined || this.password2 === ""){
        this.toastr.error("Password can not be null!")
      }else{
        
        if(this.user.password == this.password2){

          const url = 'http://localhost:8082/api/users/add';

          const sendParams = {
            userName: this.user.userName,
            password: this.user.password,
            role: this.selectedRole
          }

          this.http.post<IResponse>(url, sendParams).subscribe(
            (response) => {
              const success = response.success
              const message = response.message
             // this.userId.data = response.data
             // console.log(this.userId.data)
             // const id = response.id
             // console.log(response.id)
              this.toastr.success("Successful!")
              if(success === true){
                  this.ngxSmartModalService.getModal('myModal').close();
                  //console.log("register cevap" + response)
                  this.fncAllUser()
                  this.printRole()
              }
            },
            (error) => {
              console.error('error', error);
            });
        }else{
          this.toastr.error("Check your passwords!")
        }

      }
    }

    fncRemove( userID:string ) {
      //console.log(adresID)
      const answer = confirm("Are you sure!")
    if(answer){
      const url = 'http://localhost:8082/api/users/delete';

      const sendParams = {
        id: userID
      }

      this.http.post<IDeleteRes>(url, sendParams ).subscribe(
        (response) => {
          //console.log(response.message)
          this.fncAllUser()
        },
        (error) => {
          console.error('error', error);
        });
    }
  }
  
}
