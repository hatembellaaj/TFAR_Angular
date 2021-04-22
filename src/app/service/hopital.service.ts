import { Hopital } from './../../model/hopital';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HopitalService {

  private baseUrl = environment.host;

  private auth_token="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYxODk1MDk5N30.YEw0Vj3kgDLfkK_DWiCaE-wwjj0-sR-6ouBogfD8OstSCqgRG6896Gp7LGU753_d1gZjZ8fPIlVCr7KE6MEESA";

  headers: HttpHeaders = new HttpHeaders();


  constructor(private http: HttpClient) { }


  getAllHopitals(): Observable<Hopital[]>

  {
    //const token=sessionStorage.getItem('jhi-authenticationtoken');
    const token=this.auth_token;
    console.log(token);
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<Hopital[]>(this.baseUrl+"/api/hopitaleDtos/findAll", { headers: this.headers });

  }

  /*

  constructor(private http: HttpClient) {
const token = localStorage.getItem(’token’);
this.headers = new HttpHeaders().set(’Authorization’, ’Bearer ’ + token);
}
getAll() {
return this.http.get(this.url, { headers: this.headers }).pipe(map(data => data[’hydra:
member’]));
}



  */


  getHopitaleById(Code_hopitale: number): Observable<Hopital> {
    return this.http.get<Hopital>(this.baseUrl+"/api/hopitaleDtos/find/"+Code_hopitale);
  }

  saveHopital(hopital: Hopital): Observable<Hopital> {
    return this.http.post<Hopital>(this.baseUrl+"/api/hopitaleDtos/save",hopital);
  }

  updateHopital(hopital: Hopital): Observable<Hopital> {
    return this.http.put<Hopital>(this.baseUrl+"/api/hopitaleDtos/save/"+hopital.Code_hopitale,hopital);
  }

  deleteHopital(hopital: Hopital): Observable<void> {
    return this.http.delete<void>(this.baseUrl+"/api/hopitaleDtos/delete/"+hopital.Code_hopitale);
  }


}
