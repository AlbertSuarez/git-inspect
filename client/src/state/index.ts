import { IUserMainModel } from "../models/IUserMainModel";

export interface IGitInspectState {
    page: string;
    usermaindata?: IUserMainModel;
    isBusy: boolean;
    scroll: boolean;
    scrollDirection: string;
}

export const initialState: IGitInspectState = {
    page: "HOME",
    usermaindata: undefined,
    isBusy: true,
    scroll: false,
    scrollDirection: "LEFT"
}