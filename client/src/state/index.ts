import { IUserMainModel } from "../models/IUserMainModel";

export interface IGitInspectState {
    page: string;
    user_main_data?: IUserMainModel;
    isBusy: boolean;
    scroll: boolean;
    scrollDirection: string;
}

export const initialState: IGitInspectState = {
    page: "HOME",
    user_main_data: undefined,
    isBusy: true,
    scroll: false,
    scrollDirection: "LEFT"
}