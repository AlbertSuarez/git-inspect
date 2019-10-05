import { ActionTypes } from ".";
import { IGitInspectState } from "../state";
import Service from "../service/Service";
import { IUserModel } from "../models/IUserModel";

const SubmitLoginRequest = () =>({ 
    type:ActionTypes.SUBMIT_USERNAME_REQUEST,
    isBusy: true
});

export function SubmitLogin(username: string){
    return async (dispatch:any, getState:any)=>{
        const state:IGitInspectState = getState();

        let service = new Service();
        dispatch(SubmitLoginRequest());
        service.retriveUserProfile(username)
        .then((userdata: IUserModel)=>{
            console.log("UserData",userdata);
        });
    }
}