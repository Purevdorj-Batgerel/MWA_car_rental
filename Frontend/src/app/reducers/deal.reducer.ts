import * as DealActions from '../actions/deal.actions'

export interface State {
    selected_deal: string;
};

const initialState = {
    selected_deal: ''
    // 5c17cfec23cb4529748b0d60
}

export function reducer(state: State = initialState, action: DealActions.Actions) {
    switch (action.type) {
        case DealActions.SELECT_DEAL:
            return { ...state, selected_deal: action.payload }

        default:
            return state;
    }
}