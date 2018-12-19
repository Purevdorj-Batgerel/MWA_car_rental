import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { Store } from '@ngrx/store';

import { State } from '../reducers';
import * as UserActions from '../actions/user.actions';
import { Router } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
    selector: 'app-login',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;
    errMessage: string;

    success: boolean = false;

    //Store - Redux's store
    constructor(private router: Router, private http: HttpService, private formBuilder: FormBuilder) {
        this.signupForm = this.formBuilder.group({
            'name': ['', Validators.required],
            'email': ['', [
                Validators.required,
                Validators.email
            ]],
            'password': ['', Validators.required],
            'userType': ['', Validators.required]
        });
    }

    ngOnInit() {
    }

    onSubmit() {
        console.log(this.signupForm.value);
        this.http.post('http://localhost:5000/API/user/signup', this.signupForm.value).subscribe(
            result => {
                this.success = true;
            }, err => {
                this.errMessage = err.error.message;
            });
    }
}
