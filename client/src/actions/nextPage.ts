import { ActionTypes } from ".";
import { IGitInspectState } from "../state";

export function NextPage() {
    return async (dispatch: any, getState: any) => {
        let state: IGitInspectState = getState();
        let page: string

        switch (state.section) {
            case "GENERAL INFO":        { page = "YOUR REPOSITORIES"; break; }
            case "YOUR REPOSITORIES":   { page = "CODE"; break; }
            case "CODE":                { page = "COMMITS"; break; }
            case "COMMITS":             { page = "FRIENDS"; break; }
            case "FRIENDS":             { page = "MUSIC"; break; }
            default:                    { page = "GENERAL INFO"; break; }
        }

        dispatch({ type: ActionTypes.NEXT_PAGE, section: page });
    }
}

export function BackPage() {
    return async (dispatch: any, getState: any) => {
        let state: IGitInspectState = getState();
        let page: string

        switch (state.section) {
            case "YOUR REPOSITORIES":   { page = "GENERAL INFO"; break; }
            case "CODE":                { page = "YOUR REPOSITORIES"; break; }
            case "COMMITS":             { page = "CODE"; break; }
            case "FRIENDS":             { page = "COMMITS"; break; }
            case "MUSIC":               { page = "FRIENDS"; break; }
            default:                    { page = "GENERAL INFO"; break; }
        }

        dispatch({ type: ActionTypes.NEXT_PAGE, section: page});
    }
}
