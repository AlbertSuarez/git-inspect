import * as React from 'react';
//import { Provider, ProviderProps } from 'react-redux';
import { IGitInspectProps } from './IGitInspectProps';
//import DetalleFormacion from '../detalleFormacion/DetalleFormacion';
//import { createStore } from '../../store';

export default class GitInspect extends React.Component<IGitInspectProps, {}> {

    //private store = null;

    constructor(props:IGitInspectProps){
        super(props);

        //this.store = createStore();
    }

    public render(): React.ReactElement<IGitInspectProps>{
        return(
            <div>Hello World!</div>
            // <Provider store={this.store}>
            //     <DetalleFormacion 
            //         webUrl={this.props.webUrl}
            //         isDebug={this.props.isDebug}
            //         endpoint={this.props.endpoint}
            //         httpClient={this.props.httpClient}
            //         adminGroup={this.props.adminGroup}/>
            // </Provider>
        );
    }

}