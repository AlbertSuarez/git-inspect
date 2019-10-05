export interface IGitInspectState {
    page: string;
    isBusy: boolean;
}

export const initialState: IGitInspectState = {
    page: "HOME",
    isBusy: true
}