import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Departement } from 'src/model/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  private baseUrl = environment.host;
  private auth_token="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYyMTAxNjc5MX0.TgNcQ17yFHwjaUlaYl8JJbS_pNNciFM4ZY_UAumMAQRkD6GwOpj2q_driQUAQ8awaVnmuskoT9XH_hzFuQP4Dg";
  headers!: HttpHeaders;


  constructor(private http: HttpClient) {
    console.log(this.auth_token);
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.auth_token).set('content-type', 'application/json');
    console.log("salut test ...... ");

  }

  getAllDepartements(): Observable<Departement[]>{
    return this.http.get<Departement[]>(this.baseUrl+"/api/departements/findAll", { headers: this.headers });
  }

  saveDepartement(departement: Departement): Observable<Departement> {
    return this.http.post<Departement>(this.baseUrl+"/api/departements/save",departement,{ headers: this.headers });
  }

  updateDepartement(departement: Departement): Observable<Departement> {
    return this.http.put<Departement>(this.baseUrl+"/api/departements/save/"+departement.code,departement,{ headers: this.headers });
  }

  deleteDepartement(departement: Departement): Observable<void> {
    return this.http.delete<void>(this.baseUrl+"/api/departements/delete/"+departement.code,{ headers: this.headers });
  }


}

