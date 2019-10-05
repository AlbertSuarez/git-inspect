import {IUserModel} from '../models/IUserModel';

export default interface IService {
    retriveUserProfile(username: string): Promise<IUserModel>;
}