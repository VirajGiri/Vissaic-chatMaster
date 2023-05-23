import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { User } from '../Interface/User/user.module';
import { AbstractService } from './common/abstract.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class GenralServiceService extends AbstractService{

  token:string = localStorage.getItem("token") || "";
  constructor(protected http: HttpClient,public user:LoginService) {
    super();
  }

  login(username:string, password:string):Observable<User>{
    const httpParams = new HttpParams()
    const body = {'username':username,'password':password}
    return this.http.post<User>(`${this.localUrl}api/login`,body, {params:httpParams})
    .pipe(catchError(this.handleError))
  }
sendMessege(messegeData:any){
  
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Access-Token':  this.token});
    let options = { headers: headers };
  
    const body = messegeData;
    return this.http.post<User>(`${this.localUrl}api/add_messege`,body,options)
    .pipe(catchError(this.handleError))
}
getMesseges(userId:any){
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Access-Token':  this.token});
    let options = { headers: headers };
    let body = {currentuserId:userId};
    return this.http.post(`${this.localUrl}api/get_messeges_by_userid`,body,options)
    .pipe(catchError(this.handleError))
}
}
