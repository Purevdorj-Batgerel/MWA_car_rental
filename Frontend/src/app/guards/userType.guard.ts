import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { State } from '../reducers';
import { IUser } from '../models/user.model';

@Injectable()
export class UserTypeGuard implements CanActivate {
    user$: Observable<IUser>;
    user;

    constructor(
        private router: Router,
        private store: Store<State>
    ) {
        this.user$ = this.store.pipe(select('user'));

        this.user$.subscribe((user) =>{
          this.user = user;
        })

    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
        return true;
    }
}