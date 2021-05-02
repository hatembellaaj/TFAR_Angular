import { ServiceService } from 'src/app/services/service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Service } from 'src/model/service';



@Component({
  selector: 'app-service-dialog',
  templateUrl: './service-dialog.component.html',
  styleUrls: ['./service-dialog.component.css']
})
export class ServiceDialogComponent implements OnInit {

  constructor(private serviceService:ServiceService,public dialogRef: MatDialogRef<ServiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Service) { }

  ngOnInit(): void {
  }

  /*onAdd(form:any){
    console.log(form);
    if (form.valid) {

      this.serviceService.saveService(form.value)

      console.log("ajouté: ["+form.value.Code_Service+","+form.value.Nom_Service+"]");

      console.log(this.serviceService.getAllServices());

    }

  }*/

  onNoClick(){

    this.dialogRef.close();
    console.log("cancel");

  }


}
