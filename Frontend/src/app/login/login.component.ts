import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from '../Services/http.service';
import { Store } from '@ngrx/store';

import { State } from '../redux/user.state';
import * as UserActions from '../redux/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private http: HttpService, private formBuilder: FormBuilder, private store: Store<State>) {
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
    console.log(this.loginForm);
    this.http.post('http://localhost:5000/api/user/login', this.loginForm.value).subscribe(result => {

      if (result.success == true) {
        window.localStorage.setItem('token', result.token);

        const name = "test";
        const userType = "driver";
        this.store.dispatch(new UserActions.Login({
          name,
          userType
        }))
      }
    });
  }
}
