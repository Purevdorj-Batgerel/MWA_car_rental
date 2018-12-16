import { Action } from '@ngrx/store'
import { IUser } from './user.model';

export const LOGIN = 'LOGIN'

export class Login implements Action {
    readonly type = LOGIN

    constructor(public payload:IUser) { }
}

export type Actions = Login