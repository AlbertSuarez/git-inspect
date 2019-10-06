import {IUserMainModel} from '../models/IUserMainModel';

export default interface IService {
    retriveUserProfile(username: string): Promise<IUserMainModel>;
    retriveSpotyUrl():Promise<string>;
    retriveSpotyPlaylist(code: string, username: string):Promise<string>;
}