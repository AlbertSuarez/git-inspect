import { ActionTypes } from ".";
import { IGitInspectState } from "../state";
import Service from "../service/Service";
import { IUserMainModel } from "../models/IUserMainModel";

const SubmitLoginSuccess = (user_main_data: IUserMainModel) =>({ 
    type:ActionTypes.SUBMIT_USERNAME_SUCCESS,
    user_main_data,
    page: "DASHBOARD",
    isBusy: false
});

const SubmitLoginRequest = () =>({
    type:ActionTypes.SUBMIT_USERNAME_REQUEST,
    isBusy: true
});

const ErrorRequest = () =>({ type:ActionTypes.IS_BUSY_FALSE });

export function SubmitLogin(username: string){
    return async (dispatch:any)=>{
        let service = new Service();
        dispatch(SubmitLoginRequest());
        service.retriveUserProfile(username)
        .then((user_main_data: IUserMainModel)=>{
            dispatch(SubmitLoginSuccess(user_main_data));
        })
        .catch(()=>{
            dispatch(ErrorRequest());
        });
    }
}