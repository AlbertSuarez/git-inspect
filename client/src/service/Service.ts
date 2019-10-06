import IService from "./IService";
import {IUserMainModel} from '../models/IUserMainModel';

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
                    resolve(data.response);
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
                    resolve(data.response.redirect);
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
                    resolve(data.response.url);
                });
            })
        });
    }
}