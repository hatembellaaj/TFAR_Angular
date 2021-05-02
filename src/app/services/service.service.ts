import { Injectable } from '@angular/core';
import { Service } from 'src/model/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService  {

  serviceList!:Service[];
  array!:Service[];
  ELEMENT_DATA!:Service[];


  constructor() {
    this.ELEMENT_DATA=[{Code_Service:1,Nom_Service:"service1"},

    {Code_Service:8,Nom_Service:"service8"},
    {Code_Service:9,Nom_Service:"service9"},
    {Code_Service:10,Nom_Service:"service10"},
    {Code_Service:11,Nom_Service:"service11"},
    {Code_Service:2,Nom_Service:"service2"},
    {Code_Service:3,Nom_Service:"service3"},
    {Code_Service:4,Nom_Service:"service4"},
    {Code_Service:5,Nom_Service:"service5"},
    {Code_Service:6,Nom_Service:"service6"},
    {Code_Service:7,Nom_Service:"service7"}];
    this.serviceList=this.ELEMENT_DATA;
   }

  getAllServices() {
    return this.serviceList;
  }


  saveService(service:Service) {
    this.serviceList.push(service);
  }

  updateService(service:Service){


this.serviceList.map(s=>{
  if (s.Code_Service==service.Code_Service){
    s.Nom_Service=service.Nom_Service;
    console.log(service.Nom_Service,"qz");
  }
  return s;
});

    console.log("update 1 rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
    console.log(this.serviceList);

    console.log("update");

  }


  deleteService(service:Service){
    this.serviceList=this.serviceList.filter(s =>s.Code_Service!=service.Code_Service);
    console.log("delete!!!!")
    console.log(this.serviceList);
    console.log("*********************")

  }




}
