import * as React from 'react';
import { connect } from 'react-redux';
import { Provider, ProviderProps } from 'react-redux';
import { createStore } from '../../store';
import { SetInitialState } from '../../actions/setInitialState';
import { IGitInspectState } from '../../state';
import Dashboard from '../dashboard/Dashboard';
import HomePage from '../homePage/HomePage';

class GitInspect extends React.Component<any, {}> {

    constructor(props:any){
        super(props);
        this.props.setInitialState();
    }

    public render(): React.ReactElement<any>{
        return(
            <div>
                {this.props.page=="HOME" ? <HomePage/> : <Dashboard/>}
            </div>
        );
    }
}

interface IDispatch{
    setInitialState:() => void;
}

const mapDispatchToProps = (dispatch:any):IDispatch => {
    return{
        setInitialState:() => {
            return dispatch(SetInitialState());
        }
    };
};

const mapStateToProps = (state: IGitInspectState) => ({
    page: state.page
});

export default connect(mapStateToProps,mapDispatchToProps)(GitInspect);