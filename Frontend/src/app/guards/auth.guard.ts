import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        public router: Router
    ) { }

    canActivate(): boolean {
        const token = window.localStorage.getItem('token');
        if (token === null) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}