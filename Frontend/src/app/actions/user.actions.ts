import { Action } from '@ngrx/store'
import { IUser } from '../models/user.model';

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export class Login implements Action {
    readonly type = LOGIN

    constructor(public payload: IUser) { }
}

export class Logout implements Action {
    readonly type = LOGOUT;

    constructor() { }
}

export type Actions = Login | Logout