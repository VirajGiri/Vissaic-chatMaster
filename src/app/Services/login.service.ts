import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Interface/User/user.module';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router) { }

  login(userData:any){
    localStorage.setItem('userData',JSON.stringify(userData));
    localStorage.setItem("isUserLogin",'true')
    this.goToHome();
  }

  setToken(token:any){
    localStorage.setItem('token',JSON.stringify(token))
  }

  goToHome(){
    this.router.navigate(['in'])
  }

  getData(): User{
    const user = localStorage.getItem('userData');
    return user === null ? null : JSON.parse(user);
  }

  removeItems(){
    localStorage.removeItem("userData");
    localStorage.removeItem("isUserLogin");
    this.router.navigate(['login'])
  }
}
