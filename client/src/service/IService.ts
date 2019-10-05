import {IUserMainModel} from '../models/IUserMainModel';

export default interface IService {
    retriveUserProfile(username: string): Promise<IUserMainModel>;
}