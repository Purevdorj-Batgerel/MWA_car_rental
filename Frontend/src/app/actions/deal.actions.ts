import { Action } from '@ngrx/store'

export const SELECT_DEAL = 'SELECT_DEAL'

export class SelectDeal implements Action {
    readonly type = SELECT_DEAL

    constructor(public payload:string) { }
}

export type Actions = SelectDeal