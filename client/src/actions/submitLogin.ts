import { ActionTypes } from ".";
import { IGitInspectState } from "../state";

const SubmitLoginRequest = () =>({ 
    type:ActionTypes.SUBMIT_USERNAME_REQUEST,
    isBusy: true
});

export function SubmitLogin(username: string){
    return async (dispatch:any, getState:any)=>{
        const state:IGitInspectState = getState();

        dispatch(SubmitLoginRequest());

        //CALL SERVICE
    }
}