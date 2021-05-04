import { Hopital } from '../../model/hopital';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HopitalService {

  hopitalList!:Hopital[];
  array!:Hopital[];
  ELEMENT_DATA!:Hopital[];

  private baseUrl = environment.host;

  private auth_token="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYyMDIwNDkxOH0.THT3m9zZXDLvAe6RL2K2991vX1d2trjMMXoTCu_8SPEqYcheVuzV_PNt2AYDS04fbTkKs7LeiPHljcM6u-IWIQ";

  headers: HttpHeaders = new HttpHeaders();


  constructor(private http: HttpClient) {
    this.ELEMENT_DATA=[{Code_hopitale:1,Nom_Hopitale:"hopitale1"},
    {Code_hopitale:3,Nom_Hopitale:"hopitale3"},
    {Code_hopitale:4,Nom_Hopitale:"hopitale4"},
    {Code_hopitale:5,Nom_Hopitale:"hopitale5"},
    {Code_hopitale:6,Nom_Hopitale:"hopitale6"},
    {Code_hopitale:7,Nom_Hopitale:"hopitale7"},
    {Code_hopitale:2,Nom_Hopitale:"hopitale2"},
    {Code_hopitale:8,Nom_Hopitale:"hopitale8"},
    {Code_hopitale:9,Nom_Hopitale:"hopitale9"},
    {Code_hopitale:10,Nom_Hopitale:"hopitale10"},
    {Code_hopitale:11,Nom_Hopitale:"hopitale11"}];
    this.hopitalList=this.ELEMENT_DATA;
   }





   //getAllHopitals(): Observable<Hopital[]>
   getAllHopitals()
   {
     //const token=sessionStorage.getItem('jhi-authenticationtoken');
     const token=this.auth_token;
     console.log(token);
     this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
     console.log("salut test ...... "); 
     this.http.get<Hopital[]>(this.baseUrl+"/api/hopitaleDtos/findAll", { headers: this.headers }).subscribe(response => {
      //this.hopitalList = response.map(item => new Hopital(item));
      console.log(response);
  });
     return this.hopitalList;
   }
  /* getAllHopitals() {
    return this.hopitalList;
  }*/


  saveHopital(hopital:Hopital) {
    this.hopitalList.push(hopital);
  }

  updateHopital(hopital:Hopital){


    this.hopitalList.map(h=>{
      if (h.Code_hopitale==hopital.Code_hopitale){
        h.Nom_Hopitale=hopital.Nom_Hopitale;
        console.log(hopital.Nom_Hopitale,"qz");
      }
      return h;
    });

        console.log("update 1 rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
        console.log(this.hopitalList);

        console.log("update");

      }


      deleteHopital(hopital:Hopital){
        this.hopitalList=this.hopitalList.filter(h =>h.Code_hopitale!=hopital.Code_hopitale);
        console.log("delete!!!!")
        console.log(this.hopitalList);
        console.log("*********************")

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

/*
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
  }*/


}
