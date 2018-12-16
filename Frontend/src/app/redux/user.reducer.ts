// import { Action } from '@ngrx/store'
import * as UserActions from './user.actions'


const initialState = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
}


export function reducer(state = [initialState], action: UserActions.Actions) {
    switch (action.type) {
        case UserActions.LOGIN:
            return [...state, action.payload];

        default:
            return state;
    }
}