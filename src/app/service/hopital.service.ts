import { Hopital } from './../../model/hopital';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HopitalService {

  private baseUrl = environment.host;

  constructor(private http: HttpClient) { }

  getAllHopilals(): Observable<Hopital[]> {
    return this.http.get<Hopital[]>(this.baseUrl+"/api/hopitaleDtos/findAll");
  }

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
