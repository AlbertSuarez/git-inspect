import IService from "./IService";
import {IUserMainModel} from '../models/IUserMainModel';
import * as toastr from 'toastr';

export default class Service implements IService {

    public retriveUserProfile(username: string): Promise<IUserMainModel>{
        return new Promise<IUserMainModel>((resolve,reject)=>{
            let headers = new Headers();        

            fetch("http://localhost:8084/user?github_user="+username,{
                headers: headers,
                method: 'GET',
            })
            .then(response=>{
                response.json()
                .then(data=>{
                    if(data.error==true) {
                        reject();
                        toastr.error(data.message);
                    }
                    else resolve(data.response);
                });
            })
        });
    }

    public retriveSpotyUrl(): Promise<string>{
        return new Promise<string>((resolve,reject)=>{
            let headers = new Headers();        

            fetch("http://localhost:8084/spotify/login",{
                headers: headers,
                method: 'GET',
            })
            .then(response=>{
                response.json()
                .then(data=>{
                    if(data.error==true) {
                        reject();
                        toastr.error(data.message);
                    }
                    else resolve(data.response.redirect);
                });
            })
        });
    }

    public retriveSpotyPlaylist(code: string, username: string): Promise<string>{
        return new Promise<string>((resolve,reject)=>{
            let headers = new Headers();        
            
            fetch("http://localhost:8084/spotify/playlist?code="+code+"&github_user="+username,{
                headers: headers,
                method: 'GET',
            })
            .then(response=>{
                response.json()
                .then(data=>{
                    if(data.error==true) {
                        reject();
                        toastr.error(data.message);
                    }
                    else resolve(data.response.url);
                });
            })
        });
    }
}