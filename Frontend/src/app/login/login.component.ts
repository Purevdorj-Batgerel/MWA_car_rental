import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { Store } from '@ngrx/store';

import { State } from '../reducers';
import * as UserActions from '../actions/user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  //Store - Redux's store
  constructor(private router: Router, private http: HttpService, private formBuilder: FormBuilder, private store: Store<State>) {
    this.loginForm = this.formBuilder.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.http.post('http://localhost:5000/API/user/login', this.loginForm.value).subscribe(result => {

      if (result.success == true) {
        window.localStorage.setItem('token', result.token);

        const name = "Yafei"; //get from token
        let userType = "driver";
        this.store.dispatch(new UserActions.Login({
          name,
          userType
        }))

        if (userType == 'driver') {
          this.router.navigate(['deal-search']);
        } else {
          this.router.navigate(['deal-history']);
        }
      }
    });
  }
}
