import * as React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { IGitInspectState } from '../../../state';
import '../../../style/section.css';
import { NextPage } from '../../../actions/nextPage';
import { Button } from '@material-ui/core';
import '../../../style/generalInfo.css';

class GeneralInfo extends React.Component<any, {}> {

    constructor(props:any){
        super(props);
    }

    public render(): React.ReactElement<any>{

        console.log("DATA HOLIS",this.props);

        return(
            <Card className="sectionCard">
                <div className="headerSection">
                    <img src={this.props.user_main_data.photo} className="profileImg"></img>
                    {/* <h1 className="profileName">{this.props.user_main_data.username}</h1> */}
                </div>
                <div className="sectionContent">    
                    <div className="subSection">
                        <div className="subSectionTitleContainer"><h2>Interaction</h2></div>
                        <div className="subSectionContent">
                            <div>
                                <div className="bigNumeber">{this.props.user_main_data.followers}</div>
                                <div className="bigNumeberText">Followers</div>
                            </div>
                            <div>
                                <div className="bigNumeber">{this.props.user_main_data.following}</div>
                                <div className="bigNumeberText">Following</div>
                            </div>
                        </div>
                    </div>
                    <div className="subSection">
                        <div className="subSectionTitleContainer"><h2>Public Activity</h2></div>
                        <div className="subSectionContent">
                            <div>
                                <div className="bigNumeber">{this.props.user_main_data.public_repos}</div>
                                <div className="bigNumeberText">Public Repos</div>
                            </div>
                            <div>
                                <div className="bigNumeber">{this.props.user_main_data.public_gists}</div>
                                <div className="bigNumeberText">Public Gists</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerContent">
                    <div className="space"></div>
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={this.nextPage}
                        className="nextSectionButton">
                        Next Section
                    </Button>
                </div>
            </Card>
        );
    }

    private nextPage = () => {
        this.props.nextPage();
    } 
}

interface IDispatch{
    nextPage:() => void;
}

const mapDispatchToProps = (dispatch:any):IDispatch => {
    return{
        nextPage:() => {
            return dispatch(NextPage());
        }
    };
};

const mapStateToProps = (state: IGitInspectState) => ({
    user_main_data: state.user_main_data
});

export default connect(mapStateToProps,mapDispatchToProps)(GeneralInfo);