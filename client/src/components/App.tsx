import { Store } from 'redux';
import * as React from 'react';
import '../style/background.scss';
import { createStore } from '../store';
import { Provider } from 'react-redux';
import GitInspect from './gitInspect/GitInspect';
import { IGitInspectState, initialState } from '../state';

export interface IAppProps { }

export default class App extends React.Component<IAppProps, {}> {

    private store: Store<IGitInspectState>;

    constructor(props: IAppProps){
        super(props);
        this.store = createStore(initialState);
    }

    public render(): React.ReactElement<IAppProps> {
        return (
            <div>
                <div className="hero">
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                </div>
                <Provider store={ this.store }>
                    <GitInspect/>
                </Provider>
            </div>
        );
    }
}
