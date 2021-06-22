import { Fiche } from './../../model/fiche';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FicheService {

  private baseUrl = environment.host;
  private auth_token="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYyMzI1ODAzN30.7a-YVPD9wr5VX2Teil9kXcsXBriQHStlydVbqC0GjqcAufHBSyuOxusLfCnFlIPImXhU3uGONRMozeS3mL63Qw";
  headers!: HttpHeaders;



   constructor(private http: HttpClient) {
     console.log(this.auth_token);
     this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.auth_token).set('content-type', 'application/json');
     console.log("salut test ...... ");

   }


  getAllFiches(): Observable<Fiche[]>{
    return this.http.get<Fiche[]>(this.baseUrl+"/api/fiches/findAll", { headers: this.headers });
  }

  saveFiche(fiche: Fiche): Observable<Fiche> {
    return this.http.post<Fiche>(this.baseUrl+"/api/fiches/save",fiche,{ headers: this.headers });
  }

  updateFiche(fiche: Fiche): Observable<Fiche> {
    return this.http.put<Fiche>(this.baseUrl+"/api/fiches/save/"+fiche.nDossierFiche,fiche,{ headers: this.headers });
  }

  deleteFiche(fiche: Fiche): Observable<void> {
    return this.http.delete<void>(this.baseUrl+"/api/fiches/delete/"+fiche.nDossierFiche,{ headers: this.headers });
  }



}
