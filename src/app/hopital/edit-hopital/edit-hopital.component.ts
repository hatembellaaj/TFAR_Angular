import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HopitalService } from 'src/app/service/hopital.service';

@Component({
  selector: 'app-edit-hopital',
  templateUrl: './edit-hopital.component.html',
  styleUrls: ['./edit-hopital.component.css']
})
export class EditHopitalComponent implements OnInit {

  Code_hopitale : number ;
  hopitalFormGroup?:FormGroup;
  submitted:boolean=false;
  constructor(private activatedRoute:ActivatedRoute,
              private hopitalService:HopitalService,
              private fb:FormBuilder) {
    this.Code_hopitale=this.activatedRoute.snapshot.params.Code_hopitale;
  }

  ngOnInit(): void {
    this.hopitalService.getHopitaleById(this.Code_hopitale).subscribe(
      hopital=>{
        this.hopitalFormGroup=this.fb.group(
          {
            Code_hopitale:[hopital.Code_hopitale,Validators.required],
            Nom_Hopitale:[hopital.Nom_Hopitale,Validators.required]
          }
        )
      }
    );
  }

  onUpdateProduct() {
    this.hopitalService.updateHopital(this.hopitalFormGroup?.value)
      .subscribe(data=>{
        alert("Success hopital updated");
      });
  }
}
