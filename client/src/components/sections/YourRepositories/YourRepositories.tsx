import * as React from 'react';
import { connect } from 'react-redux';
import { IGitInspectState } from '../../../state';
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';
import '../../../style/section.css';
import '../../../style/yourRepositories.css';
import { NextPage, BackPage } from '../../../actions/nextPage';

class YourRepositories extends React.Component<any, {}> {

    constructor(props:any){
        super(props);
    }
    
    public render(): React.ReactElement<any>{
        return(
            <Card className="sectionCard">
                <div className="headerSection">
                    <div>
                        <div>You have...</div>
                        <div className="headerNumberContainer">
                            <div className="headerNumber">{this.props.user_main_data.repo_amount}</div>
                            <div className="bigNumeberRepoTextContainer">&nbsp;&nbsp;&nbsp;repositories</div>
                        </div>
                    </div>
                </div>
                <div className="sectionContent">
                    <div>
                        <h2 className="repoSubSection">Size</h2>
                        <div className="bigNumeberRepo">{this.props.user_main_data.repo_total_size + "Mb"}</div>
                        <div className="bigNumeberRepoText">Total</div>
                        <div className="bigNumeberRepo">{this.props.user_main_data.repo_avg_size + "Mb"}</div>
                        <div className="bigNumeberRepoText">Avg</div>
                    </div>
                    <div>
                        <h2 className="repoSubSection">Stars</h2>
                        <div className="bigNumeberRepo">{this.props.user_main_data.repo_total_stars}</div>
                        <div className="bigNumeberRepoText">Total</div>
                        <div className="bigNumeberRepo">{this.props.user_main_data.repo_avg_stars}</div>
                        <div className="bigNumeberRepoText">Avg</div>
                    </div>
                    <div>
                        <h2 className="repoSubSection">Forks</h2>
                        <div className="bigNumeberRepo">{this.props.user_main_data.repo_total_forks}</div>
                        <div className="bigNumeberRepoText">Total</div>
                        <div className="bigNumeberRepo">{this.props.user_main_data.repo_avg_forks}</div>
                        <div className="bigNumeberRepoText">Avg</div>
                    </div>
                    <div>
                        <h2 className="repoSubSection">Issues</h2>
                        <div className="bigNumeberRepo">{this.props.user_main_data.repo_total_open_issues}</div>
                        <div className="bigNumeberRepoText">Total</div>
                        <div className="bigNumeberRepo">{this.props.user_main_data.repo_avg_open_issues}</div>
                        <div className="bigNumeberRepoText">Avg</div>
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
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={this.nextPage}
                        className="nextSectionButton">
                        Next
                    </Button>
                </div>
            </Card>
        );
    }

    private nextPage = () => {
        this.props.nextPage();
    }

    private backPage = () => {
        this.props.backPage();
    }
}

interface IDispatch{
    nextPage:() => void;
    backPage:() => void;
}

const mapDispatchToProps = (dispatch:any):IDispatch => {
    return{
        nextPage:() => {
            return dispatch(NextPage());
        },
        backPage:() => {
            return dispatch(BackPage());
        }
    };
};

const mapStateToProps = (state: IGitInspectState) => ({
    user_main_data: state.user_main_data
});

export default connect(mapStateToProps,mapDispatchToProps)(YourRepositories);