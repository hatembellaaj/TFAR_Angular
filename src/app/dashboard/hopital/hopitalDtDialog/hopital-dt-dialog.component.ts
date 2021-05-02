import { Component, Inject, OnInit } from '@angular/core';
import { Hopital } from 'src/model/hopital';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-hopital-dt-dialog',
  templateUrl: './hopital-dt-dialog.component.html',
  styleUrls: ['./hopital-dt-dialog.component.css']
})
export class HopitalDtDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef< HopitalDtDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hopital) { }

  ngOnInit(): void {
  }

  onNoClick(){

    this.dialogRef.close();
    console.log("cancel");

  }

}
