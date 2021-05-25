import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Service } from 'src/model/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService  {


  private baseUrl = environment.host;
  private auth_token="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYyMTAxNjc5MX0.TgNcQ17yFHwjaUlaYl8JJbS_pNNciFM4ZY_UAumMAQRkD6GwOpj2q_driQUAQ8awaVnmuskoT9XH_hzFuQP4Dg";
  headers!: HttpHeaders;


  constructor(private http: HttpClient) {
    console.log(this.auth_token);
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.auth_token).set('content-type', 'application/json');
    console.log("salut test ...... ");

  }

  getAllServices(): Observable<Service[]>{
    return this.http.get<Service[]>(this.baseUrl+"/api/serviceDtos/findAll", { headers: this.headers });
  }

  saveService(service: Service): Observable<Service> {
    return this.http.post<Service>(this.baseUrl+"/api/serviceDtos/save",service,{ headers: this.headers });
  }

  updateService(service: Service): Observable<Service> {
    return this.http.put<Service>(this.baseUrl+"/api/serviceDtos/save/"+service.code_service,service,{ headers: this.headers });
  }

  deleteService(service:Service): Observable<void> {
    return this.http.delete<void>(this.baseUrl+"/api/serviceDtos/delete/"+service.code_service,{ headers: this.headers });
  }


}
