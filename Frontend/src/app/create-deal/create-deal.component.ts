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

@Component({
  selector: 'app-create-deal',
  templateUrl: './create-deal.component.html',
  styleUrls: ['./create-deal.component.css']
})
export class CreateDealComponent implements OnInit {
  myForm: FormGroup;

  locations;

  constructor(private formBuilder: FormBuilder, private http:HttpService) {

    this.http.get('');
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


