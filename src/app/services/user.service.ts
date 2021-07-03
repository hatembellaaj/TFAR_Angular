import { User } from './../../model/user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Organisme } from 'src/model/organisme';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.host;
  private auth_token="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYyMzI1ODAzN30.7a-YVPD9wr5VX2Teil9kXcsXBriQHStlydVbqC0GjqcAufHBSyuOxusLfCnFlIPImXhU3uGONRMozeS3mL63Qw";
  headers!: HttpHeaders;



   constructor(private http: HttpClient) {
     console.log(this.auth_token);
     this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.auth_token).set('content-type', 'application/json');
     console.log("salut test ...... ");

   }


  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl+"/api/users/findAll", { headers: this.headers });
  }

  saveUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl+"/api/users/save",user,{ headers: this.headers });
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.baseUrl+"/api/users/save/"+user.code,user,{ headers: this.headers });
  }

  deleteUser(user: User): Observable<void> {
    return this.http.delete<void>(this.baseUrl+"/api/users/delete/"+user.code,{ headers: this.headers });
  }



}

