import { Component, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { LoginService } from '../login.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login : String;
  url : string ="";
  constructor( private router : Router ,private httpClient : HttpClient, private loginService : LoginService) {
  this.loginService.getLoginHTML().subscribe(
      (res)=>{this.login = res},
      (err)=>{console.log(err)}
    )
  }
  ngOnInit() {
    console.log(this.router);
    
  }
}


