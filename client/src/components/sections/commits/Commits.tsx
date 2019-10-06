import * as React from 'react';
import { connect } from 'react-redux';
import { IGitInspectState } from '../../../state';
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';
import '../../../style/section.css';
import '../../../style/yourRepositories.css';
import { NextPage } from '../../../actions/nextPage';

class Commits extends React.Component<any, {}> {

    constructor(props:any){
        super(props);
    }

    public render(): React.ReactElement<any>{
        return(
            <Card className="sectionCard">
                <div className="headerSection">
                    <div>
                        <div>You have done...</div>
                        <div className="headerNumberContainer">
                            <div className="headerNumber">{this.props.user_main_data.commits}</div>
                            <div className="bigNumeberRepoTextContainer">&nbsp;&nbsp;&nbsp;commits</div>
                        </div>
                    </div>
                </div>
                <div className="sectionContent">
                    <div>
                        <h2 className="repoSubSection">Size</h2>
                        <div className="bigNumeberRepo">{this.props.user_main_data.commits_contributor}</div>
                        <div className="bigNumeberRepoText">Total</div>
                        <div className="bigNumeberRepo">{this.props.user_main_data.commits_contributor_percentage + "%"}</div>
                        <div className="bigNumeberRepoText"></div>
                    </div>
                    <div>
                        <h2 className="repoSubSection">Stars</h2>
                        <div className="bigNumeberRepo">{this.props.user_main_data.commits_user}</div>
                        <div className="bigNumeberRepoText">Total</div>
                        <div className="bigNumeberRepo">{this.props.user_main_data.commits_user_percentage + "%"}</div>
                        <div className="bigNumeberRepoText"></div>
                    </div>
                </div>
                <div className="footerContent">
                    <Button 
                        variant="contained" 
                        color="secondary"
                        onClick={this.nextPage}
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

export default connect(mapStateToProps,mapDispatchToProps)(Commits);