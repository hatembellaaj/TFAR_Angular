import { Hopital } from '../../model/hopital';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HopitalService {

  private baseUrl = environment.host;
  private auth_token="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYyMTAxNjc5MX0.TgNcQ17yFHwjaUlaYl8JJbS_pNNciFM4ZY_UAumMAQRkD6GwOpj2q_driQUAQ8awaVnmuskoT9XH_hzFuQP4Dg";
  headers!: HttpHeaders;



   constructor(private http: HttpClient) {
     console.log(this.auth_token);
     this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.auth_token).set('content-type', 'application/json');
     console.log("salut test ...... ");

   }


  getAllHopitals(): Observable<Hopital[]>{
    return this.http.get<Hopital[]>(this.baseUrl+"/api/hopitaleDtos/findAll", { headers: this.headers });
  }

  saveHopital(hopital: Hopital): Observable<Hopital> {
    return this.http.post<Hopital>(this.baseUrl+"/api/hopitaleDtos/save",hopital,{ headers: this.headers });
  }

  updateHopital(hopital: Hopital): Observable<Hopital> {
    return this.http.put<Hopital>(this.baseUrl+"/api/hopitaleDtos/save/"+hopital.code_hopitale,hopital,{ headers: this.headers });
  }

  deleteHopital(hopital: Hopital): Observable<void> {
    return this.http.delete<void>(this.baseUrl+"/api/hopitaleDtos/delete/"+hopital.code_hopitale,{ headers: this.headers });
  }



}
