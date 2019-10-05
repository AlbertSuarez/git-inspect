import * as React from 'react';
import { IGitInspectState, initialState } from '../state';
import { createStore } from '../store';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import GitInspect from './gitInspect/GitInspect';

export interface IAppProps{

}

export default class App extends React.Component<IAppProps, {}> {

    private store: Store<IGitInspectState>;

    constructor(props: IAppProps){
        super(props);
        this.store = createStore(initialState);
    }
    
    public render(): React.ReactElement<IAppProps>{
        return(
            <Provider store={this.store}>
                <GitInspect/>
            </Provider>
        );
    }
}
