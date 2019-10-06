import { ActionTypes } from ".";
import Service from "../service/Service";

const ErrorRequest = () =>({ type:ActionTypes.IS_BUSY_FALSE });

export function LoginSpotify(){
    return async (dispatch:any)=>{
        let service = new Service();
        service.retriveSpotyUrl()
        .then((url: string)=>{
            window.open(url, '_blank');
        })
        .catch(()=>{
            dispatch(ErrorRequest());
        });
    }
}