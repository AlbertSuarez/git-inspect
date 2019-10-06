import Service from "../service/Service";

export function LoginSpotify(){
    return async (dispatch:any)=>{
        let service = new Service();
        service.retriveSpotyUrl()
        .then((url: string)=>{
            window.open(url, '_blank');
        });
    }
}