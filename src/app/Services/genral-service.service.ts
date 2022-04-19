import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { User } from '../Interface/User/user.module';
import { AbstractService } from './common/abstract.service';

@Injectable({
  providedIn: 'root'
})
export class GenralServiceService extends AbstractService{

  constructor(protected http: HttpClient) {
    super();
  }

  login(username:string, password:string):Observable<User>{
    const httpParams = new HttpParams()
    const body = {'username':username,'password':password}
    return this.http.post<User>(`${this.localUrl}api/login`,body, {params:httpParams})
    .pipe(catchError(this.handleError))
  }
}
