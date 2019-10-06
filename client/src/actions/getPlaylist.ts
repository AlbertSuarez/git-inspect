import { ActionTypes } from ".";
import Service from "../service/Service";

const ErrorRequest = () =>({ type:ActionTypes.IS_BUSY_FALSE });

export function GetPlaylist(code:string,username:string){
    return async (dispatch:any)=>{
        let service = new Service();
        service.retriveSpotyPlaylist(code,username)
        .then((url: string)=>{
            window.open(url);
        })
        .catch(()=>{
            dispatch(ErrorRequest());
        });
    }
}