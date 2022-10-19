import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRightFromBracket, faSun, faCloud, faUser, faCity, faCog, faCircle, faBars, faCogs, faRainbow } from '@fortawesome/free-solid-svg-icons';
import { IUser } from 'src/app/models/IUser';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { MatExpansionModule } from '@angular/material/expansion';
import { Datum, ISearch } from 'src/app/models/ISearch';
import { HttpClient } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faArrowRightFromBracket = faArrowRightFromBracket;
  faSun = faSun;
  faCloud = faCloud;
  faUser = faUser;
  faCity = faCity;
  faCog = faCog;
  faCircle = faCircle;
  faBars = faBars;
  faCogs = faCogs;
  faRainbow = faRainbow;

  user:IUser ={
    userName: '',
    password: '',
    role: ''
  }

  constructor( 
    private router:Router,
    public ngxSmartModalService: NgxSmartModalService,
    private matExpansionModule: MatExpansionModule,
    private http:HttpClient,
    private matMenuModule:MatMenuModule
    ) {

      let stUser = sessionStorage.getItem('user');

    if( stUser ){
      
       //console.log(this.user1.userName1)
      try {
        // hata olma olasılığı olan kodlar bu bölüme yazılır.
        this.user = JSON.parse( stUser);
      } catch (error) {
        // hata olduğunda çalışacak kodlar.
        sessionStorage.removeItem('user')
        localStorage.removeItem('user')
        this.router.navigate(['/'])
      }
    }else {
      //giriş yok
      sessionStorage.removeItem('user')
      localStorage.removeItem('user')
      this.router.navigate(['/'])
    }
   }

  ngOnInit(): void {
  }

  fncLogOut(){
    const answer = confirm("Are you sure!")
    if(answer){
      sessionStorage.removeItem('user')
      this.router.navigate(['/'])
    }
  }

}
