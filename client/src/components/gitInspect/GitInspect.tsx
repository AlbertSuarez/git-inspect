import * as React from 'react';
import { connect } from 'react-redux';
import { SetInitialState } from '../../actions/setInitialState';
import { IGitInspectState } from '../../state';
import Dashboard from '../dashboard/Dashboard';
import HomePage from '../homePage/HomePage';
import Cookies from 'universal-cookie';
import 'toastr/build/toastr.css';
import { GetPlaylist } from '../../actions/getPlaylist';
import Loader from '../loader/Loader';

class GitInspect extends React.Component<any, any> {

    constructor(props:any){
        super(props);
        this.props.setInitialState();

        let username = "";
        const cookies = new Cookies();
        let spotyUp = cookies.get('spotyUp');
        if(spotyUp=="true") {
            username = cookies.get('lastUserName');
            cookies.set('spotyUp', false, { path: '/' });
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');
            this.props.getPlaylist(code,username);
        }

        this.state = {
            username: username
        }
    }

    public render(): React.ReactElement<any>{
        return(
            <div>
                <Loader/>
                {this.state.username=="" ? 
                this.props.page=="HOME" ? 
                    <HomePage/> : <Dashboard/> : null       
                }
            </div>
        );
    }
}

interface IDispatch{
    setInitialState:() => void;
    getPlaylist:(code:string,username:string)=>void;
}

const mapDispatchToProps = (dispatch:any):IDispatch => {
    return{
        setInitialState:() => {
            return dispatch(SetInitialState());
        },
        getPlaylist:(code:string,username:string) => {
            return dispatch(GetPlaylist(code,username));
        }
    };
};

const mapStateToProps = (state: IGitInspectState) => ({
    page: state.page
});

export default connect(mapStateToProps,mapDispatchToProps)(GitInspect);