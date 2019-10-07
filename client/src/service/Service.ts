import * as toastr from 'toastr';
import IService from "./IService";
import { IUserMainModel } from '../models/IUserMainModel';

export default class Service implements IService {
    public retriveUserProfile(username: string): Promise<IUserMainModel> {
        return new Promise<IUserMainModel>((resolve, reject) => {
            fetch(`http://134.209.244.212:8084/user?github_user=${username}`, {
                headers: new Headers(),
                method:  'GET',
            })
            .then(response => response.json())
            .then(data => {
                if (data.error === true) {
                    reject();
                    toastr.error(data.message);
                    return;
                }
                resolve(data.response);
            });
        });
    }

    public retriveSpotyUrl(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            fetch("http://134.209.244.212:8084/spotify/login", {
                headers: new Headers(),
                method:  'GET',
            })
            .then(response => response.json())
            .then(data => {
                if (data.error === true) {
                    reject();
                    toastr.error(data.message);
                    return;
                }
                resolve(data.response.redirect);
            });
        });
    }

    public retriveSpotyPlaylist(code: string, username: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            fetch("http://134.209.244.212:8084/spotify/playlist?code="+code+"&github_user="+username,{
                headers: new Headers(),
                method:  'GET',
            })
            .then(response => response.json())
            .then(data=>{
                if (data.error === true) {
                    reject();
                    toastr.error(data.message);
                    return;
                }
                resolve(data.response.url);
            });
        });
    }
}
