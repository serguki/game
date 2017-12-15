import { UPDATE_SCREEN } from './actionTypes';

export default function(state = { screen: 1 }, action) {

    switch (action.type) {
        case UPDATE_SCREEN:
            return {...state, screen: action.screen }
        default:
            return state;
    }
}
