import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faCircle = faCircle;

  user:IUser ={
    userName: '',
    password: '',
    role: ''
  }

  constructor(
    private router:Router
  ) {

    let stUser = sessionStorage.getItem('user');

    if(stUser){
      this.user = JSON.parse( stUser);
    }
  }

  ngOnInit(): void {
  }


}
