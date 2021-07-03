import { Organisme } from '../../../../model/organisme';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-organisme-dialog',
  templateUrl: './organisme-dialog.component.html',
  styleUrls: ['./organisme-dialog.component.css']
})
export class OrganismeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OrganismeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Organisme) { }

  ngOnInit(): void {
  }

  onNoClick(){

    this.dialogRef.close();
    console.log("cancel");

  }

  todo(a:any){
    console.log(a,"mokhtar");
  }

}
