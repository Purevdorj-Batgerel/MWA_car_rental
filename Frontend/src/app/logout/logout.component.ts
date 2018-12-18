import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../reducers';

import * as UserActions from '../actions/user.actions';

@Component({
    selector: 'app-login',
    template: '',
    styles: ['']
})
export class LogoutComponent implements OnInit {
    constructor(private router: Router, private store: Store<State>) { }

    ngOnInit(): void {
        this.store.dispatch(new UserActions.Logout());
        window.localStorage.removeItem('token');
        this.router.navigate(['']);
    }
}