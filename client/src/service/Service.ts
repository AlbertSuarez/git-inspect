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
}