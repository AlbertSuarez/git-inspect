import { ActionTypes } from ".";
import { IGitInspectState } from "../state";

export function NextPage(){
    return async (dispatch:any, getState:any)=>{
        
        let state:IGitInspectState = getState();
        
        let page = "GENERAL INFO";

        if(state.section=="GENERAL INFO") page = "YOUR REPOSITORIES";
        else if(state.section=="YOUR REPOSITORIES") page = "CODE";
        
        dispatch({ type: ActionTypes.NEXT_PAGE, section: page});
    }
}