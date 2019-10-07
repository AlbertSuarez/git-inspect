import { IUserMainModel } from "../models/IUserMainModel";

export enum ActionTypes {
    SET_INITIAL_STATE       = "SET_INITIAL_STATE",
    SUBMIT_USERNAME_REQUEST = "SUBMIT_USERNAME_REQUEST",
    SUBMIT_USERNAME_SUCCESS = "SUBMIT_USERNAME_SUCCESS",
    NEXT_PAGE               = "NEXT_PAGE",
    IS_BUSY_FALSE           = "IS_BUSY_FALSE"
}

export type Action = { type: ActionTypes.SET_INITIAL_STATE }
    | { type: ActionTypes.SUBMIT_USERNAME_REQUEST, isBusy: boolean }
    | { type: ActionTypes.SUBMIT_USERNAME_SUCCESS, isBusy: boolean, page: string, user_main_data: IUserMainModel }
    | { type: ActionTypes.NEXT_PAGE, section: string }
    | { type: ActionTypes.IS_BUSY_FALSE }
