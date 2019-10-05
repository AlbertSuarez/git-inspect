import IService from "./IService";
import {IUserModel} from '../models/IUserModel';

export default class Service implements IService {

    public retriveUserProfile(username: string): Promise<IUserModel>{
        return new Promise<IUserModel>((resolve,reject)=>{
            let headers = new Headers();        

            fetch("http://localhost:8084/user?github_user="+username,{
                headers: headers,
                method: 'GET',
            })
            .then(response=>{
                response.json()
                .then(data=>{
                    console.log("DATA",data);
                    resolve(data);
                });
            })
        });
    }
}