import { IUserMainModel } from "../models/IUserMainModel";

export interface IGitInspectState {
    page: string;
    usermaindata?: IUserMainModel;
    isBusy: boolean;
}

export const initialState: IGitInspectState = {
    page: "HOME",
    usermaindata: undefined,
    isBusy: true
}