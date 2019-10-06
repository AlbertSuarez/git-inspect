import { IGitInspectState, initialState } from './../state/index';
import { ActionTypes, Action } from '../actions';

export default (state: IGitInspectState = initialState, action: Action) =>{
    
    switch(action.type){
        case ActionTypes.SET_INITIAL_STATE:
            return {
                ...state,
                page: "HOME"
            };

        case ActionTypes.SUBMIT_USERNAME_REQUEST:
            return {
                ...state,
                isBusy: action.isBusy
            }
        
        case ActionTypes.SUBMIT_USERNAME_SUCCESS:
            return {
                ...state,
                page: action.page,
                isBusy: action.isBusy,
                user_main_data: action.user_main_data
            }

        case ActionTypes.NEXT_PAGE:
            return{
                ...state,
                section: action.section
            }

        case ActionTypes.IS_BUSY_FALSE:
            return{
                ...state,
                isBusy: false
            }

        default:
            return{
                ...state
            }
    }
}