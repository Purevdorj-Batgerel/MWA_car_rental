import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";

import { Observable } from "rxjs";
import { take } from 'rxjs/operators';
import { HttpService } from "../services/http.service";
import { ILocation } from "../models/location.model";
import { IUser } from '../models/user.model';
import { State } from '../reducers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-deal',
  templateUrl: './create-deal.component.html',
  styleUrls: ['./create-deal.component.css']
})
export class CreateDealComponent implements OnInit {
  myForm: FormGroup;

  locations: ILocation[];
  user$: Observable<IUser>;
  userData: IUser;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private store: Store<State>,
    private router: Router) {
    this.user$ = this.store.pipe(select('user'));

    this.user$.subscribe(val => {
      this.userData = val;
    })

    this.http.get('http://localhost:5000/API/location/getAll').subscribe(result => {
      this.locations = result;
    });
    this.myForm = this.formBuilder.group({
      'Title': ['', Validators.required],
      'CarType': ['', [Validators.required, this.exampleValidator]],
      'Departure': ['', Validators.required],
      'Destination': ['', Validators.required],
      'Date': ['', [Validators.required, Validators.pattern('^\\d{4}(\\-|\\/|\\.)\\d{1,2}\\1\\d{1,2}$')]],
      'number': ['', Validators.required],
    });
  }

  ngOnInit() { }

  onSubmit() {
    let data = {
      tittle: this.myForm.value.Title,
      username: this.userData.name,
      dealtype: this.myForm.value.CarType,
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

    this.http.post('http://localhost:5000/API/carDeal', data).subscribe(res => {
      console.log(res);
      this.router.navigate(['/']);
    })
  }

  getCoordinate(locationName: string) {
    for (const location of this.locations) {
      if (location.name == locationName) {
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
}


