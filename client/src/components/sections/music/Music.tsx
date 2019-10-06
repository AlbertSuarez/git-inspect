import * as React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { IGitInspectState } from '../../../state';
import { NextPage, BackPage } from '../../../actions/nextPage';
import { Button } from '@material-ui/core';
import '../../../style/section.css';
import logo from '../../../assets/spotyLogo.png';
import Cookies from 'universal-cookie';
import { LoginSpotify } from '../../../actions/loginSpotify';

class Music extends React.Component<any, {}> {

    constructor(props:any){
        super(props);
    }

    public render(): React.ReactElement<any>{
        return(
            <Card className="sectionCard">
                <div className="headerSection">
                    <h1 className="profileName">Get a spotify playlist from your last commits! 😍</h1>
                </div>
                <div className="sectionContent"> 
                    <div className="spotyButton" onClick={()=>this.openSpotify()}>
                        <img src={logo} className="spotyImage"></img>
                        <h2 className="spotyText">Click here & enjoy it!</h2>
                    </div>
                </div>
                <div className="footerContent">
                    <Button 
                        variant="contained" 
                        color="secondary"
                        onClick={this.backPage}
                        className="nextSectionButton">
                        Back
                    </Button>
                    <div className="space"></div>
                </div>
            </Card>
        );
    };

    private backPage = () => {
        this.props.backPage();
    }

    private openSpotify(){
        const cookies = new Cookies();
        cookies.set('lastUserName', this.props.user_main_data.username, { path: '/' });
        cookies.set('spotyUp', true, { path: '/' });
        this.props.loginSpotify();
    }
}

interface IDispatch{
    backPage:() => void;
    loginSpotify:() => void;
}

const mapDispatchToProps = (dispatch:any):IDispatch => {
    return{
        backPage:() => {
            return dispatch(BackPage());
        },
        loginSpotify:() => {
            return dispatch(LoginSpotify());
        },
    };
};

const mapStateToProps = (state: IGitInspectState) => ({
    user_main_data: state.user_main_data
});

export default connect(mapStateToProps,mapDispatchToProps)(Music);