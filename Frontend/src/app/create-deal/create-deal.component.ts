import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";

import { Observable } from "rxjs";
import {HttpService} from "../Services/http.service";
import {ILocation} from "../models/location.model";

@Component({
  selector: 'app-create-deal',
  templateUrl: './create-deal.component.html',
  styleUrls: ['./create-deal.component.css']
})
export class CreateDealComponent implements OnInit {
  myForm: FormGroup;

  locations : ILocation[];
  //phonenumer:

  constructor(private formBuilder: FormBuilder, private http:HttpService) {

    this.http.get('http://localhost:5000/api/location/getAll').subscribe(result => {
      this.locations = result;
    });
    this.myForm = this.formBuilder.group({
      'CarType': ['', [Validators.required, this.exampleValidator]],
      'Departure': ['', [Validators.required]],
      'Destination': ['', Validators.required],
      'Date': ['', [Validators.required, Validators.pattern('^\\d{4}(\\-|\\/|\\.)\\d{1,2}\\1\\d{1,2}$')]],
      'pre': ['', Validators.required],
      'mid': ['', Validators.required],
      'last': ['', Validators.required]
    });

    this.myForm.valueChanges.subscribe(
      (data: any) => console.log(data)
    );
  }

  ngOnInit() { }

  onSubmit() {
    console.log(this.myForm);
    this.http.post('http://localhost:5000/API/carDeal',this.myForm.value).subscribe(res=>{
      console.log(res);
    })
  }

  exampleValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Example') {
      return { example: true };
    }
    return null;
  }

  asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Example') {
            resolve({ 'invalid': true });
          } else {
            resolve(null);
          }
        }, 3000);
      }
    );
    return promise;
  }
}


