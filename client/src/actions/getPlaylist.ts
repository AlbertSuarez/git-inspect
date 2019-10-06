import Service from "../service/Service";

export function GetPlaylist(code:string,username:string){
    return async (dispatch:any)=>{
        let service = new Service();
        service.retriveSpotyPlaylist(code,username)
        .then((url: string)=>{
            window.open(url, '_blank');
        });
    }
}