import { IUser } from '../models/user.model';
import * as UserActions from '../actions/user.actions'

export interface State {
    name: string;
    userType: string;
};

const initialState = {
    name: '',
    userType: ''
}

export function reducer(state: IUser = initialState, action: UserActions.Actions) {
    switch (action.type) {
        case UserActions.LOGIN:
            return Object.assign({}, state, action.payload);
        case UserActions.LOGOUT:
            return { name: "", userType: "" };
        default:
            return state;
    }
}