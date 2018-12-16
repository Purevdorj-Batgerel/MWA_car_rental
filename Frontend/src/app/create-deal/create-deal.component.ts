import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";

import { Observable } from "rxjs";
import { HttpService } from "../Services/http.service";
import { ILocation } from "../models/location.model";

@Component({
  selector: 'app-create-deal',
  templateUrl: './create-deal.component.html',
  styleUrls: ['./create-deal.component.css']
})
export class CreateDealComponent implements OnInit {
  myForm: FormGroup;

  locations: ILocation[];

  constructor(private formBuilder: FormBuilder, private http: HttpService) {

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
    let data = {
      dealtype : this.myForm.value.CarType,
      fromlocation: {
        locationname: this.myForm.value.Departure,
        coordinate: this.getCoordinate(this.myForm.value.Departure)
      },
      tolocation: {
        locationname: this.myForm.value.Destination,
        coordinate: this.getCoordinate(this.myForm.value.Destination)
      },
      departureDate: this.myForm.value.Date,
      status: "New"
    };

    console.log(this.myForm.value);

    this.http.post('http://localhost:5000/API/carDeal', data).subscribe(res => {
      console.log(res);
    })
  }

  getCoordinate(locationName:string) {
    for(const location of this.locations) {
      if(location.name == locationName) {
        return {
          x: location.x,
          y: location.y
        };
      }
    }
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


