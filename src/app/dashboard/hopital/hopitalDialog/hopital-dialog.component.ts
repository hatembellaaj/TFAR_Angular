import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hopital } from 'src/model/hopital';

@Component({
  selector: 'app-hopital-dialog',
  templateUrl: './hopital-dialog.component.html',
  styleUrls: ['./hopital-dialog.component.css']
})
export class HopitalDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<HopitalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hopital) { }

  ngOnInit(): void {
  }

  onNoClick(){

    this.dialogRef.close();
    console.log("cancel");

  }

}
