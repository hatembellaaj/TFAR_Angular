import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HopitalService } from 'src/app/service/hopital.service';

@Component({
  selector: 'app-add-hopital',
  templateUrl: './add-hopital.component.html',
  styleUrls: ['./add-hopital.component.css']
})
export class AddHopitalComponent implements OnInit {

  hopitalFormGroup?: FormGroup;
  submitted:boolean=false;

  constructor(private fb:FormBuilder, private hopitalService:HopitalService) { }

  ngOnInit(): void {
    this.hopitalFormGroup=this.fb.group({
      Nom_Hopitale:["",Validators.required],
    });
  }

  onSaveProduct() {
    this.submitted=true;
    if(this.hopitalFormGroup?.invalid) return;
    this.hopitalService.saveHopital(this.hopitalFormGroup?.value)
      .subscribe(data=>{
        alert("Success Saving hopital");
      });
  }

}
