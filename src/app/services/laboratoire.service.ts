import { Laboratoire } from './../../model/laboratoire';
import { Fiche } from './../../model/fiche';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LaboratoireService {

  private baseUrl = environment.host;
  private auth_token="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYyMzI1ODAzN30.7a-YVPD9wr5VX2Teil9kXcsXBriQHStlydVbqC0GjqcAufHBSyuOxusLfCnFlIPImXhU3uGONRMozeS3mL63Qw";
  headers!: HttpHeaders;



   constructor(private http: HttpClient) {
     console.log(this.auth_token);
     this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.auth_token).set('content-type', 'application/json');
     console.log("salut test ...... ");

   }


  getAllLaboratoires(): Observable<Laboratoire[]>{
    return this.http.get<Laboratoire[]>(this.baseUrl+"/api/laboratoires/findAll", { headers: this.headers });
  }





}
