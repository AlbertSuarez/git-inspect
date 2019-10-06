import { IUserMainModel } from "../models/IUserMainModel";

export interface IGitInspectState {
    page: string;
    user_main_data?: IUserMainModel;
    isBusy: boolean;
    section: string;
}

export const initialState: IGitInspectState = {
    page: "HOME",
    user_main_data: undefined,
    isBusy: false,
    section: "GENERAL INFO"
}