import { IGitInspectState, initialState } from './../state/index';
import { ActionTypes, Action } from '../actions';

export default (state: IGitInspectState = initialState, action: Action) =>{

    switch(action.type){
        case ActionTypes.SET_INITIAL_STATE:
            return {
                ...state,
                loginPage: true
            };
    }
}