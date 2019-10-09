import * as React from 'react';
import 'toastr/build/toastr.css';
import { connect } from 'react-redux';
import Loader from '../loader/Loader';
import Cookies from 'universal-cookie';
import HomePage from '../homePage/HomePage';
import Dashboard from '../dashboard/Dashboard';
import { IGitInspectState } from '../../state';
import { GetPlaylist } from '../../actions/getPlaylist';
import { SetInitialState } from '../../actions/setInitialState';

class GitInspect extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.props.setInitialState();
        let username = "";
        const cookies = new Cookies();
        if (cookies.get('spotyUp') === "true") {
            username = cookies.get('lastUserName');
            cookies.set('spotyUp', false, { path: '/' });
            this.props.getPlaylist(
                new URLSearchParams(window.location.search).get('code'),
                username
            );
        }
        this.state = { username };
    }

    public render(): React.ReactElement<any> {
        return (
            <div>
                <Loader/>
                { this.state.username === ""
                    ? this.props.page === "HOME"
                        ? <HomePage/>
                        : <Dashboard/>
                    : null
                }
            </div>
        );
    }
}

interface IDispatch {
    setInitialState:    () => void;
    getPlaylist:        (code: string, username: string) => void;
}

const mapDispatchToProps = (dispatch: any): IDispatch => ({
    setInitialState:    () => dispatch(SetInitialState()),
    getPlaylist:        (code: string, username: string) => dispatch(GetPlaylist(code, username))
});

const mapStateToProps = ({ page }: IGitInspectState) => ({ page });

export default connect(mapStateToProps, mapDispatchToProps)(GitInspect);
