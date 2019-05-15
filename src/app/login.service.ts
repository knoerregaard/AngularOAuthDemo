import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }
  
  getLoginHTML(){
    return this.httpClient.get('http://localhost:3000/google-login', {responseType: 'text'});
  }
}
