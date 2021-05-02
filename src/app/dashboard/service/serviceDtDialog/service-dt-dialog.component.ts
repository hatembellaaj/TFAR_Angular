import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from 'src/app/services/service.service';
import { Service } from 'src/model/service';

@Component({
  selector: 'app-service-dt-dialog',
  templateUrl: './service-dt-dialog.component.html',
  styleUrls: ['./service-dt-dialog.component.css']
})
export class ServiceDtDialogComponent implements OnInit {

  constructor(private serviceService:ServiceService,public dialogRef: MatDialogRef<ServiceDtDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Service) { }

  ngOnInit(): void {
  }

  onNoClick(){

    this.dialogRef.close();
    console.log("cancel");

  }

}
