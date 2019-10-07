import * as React from 'react';
import '../../../style/section.css';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';
import '../../../style/yourRepositories.css';
import { IGitInspectState } from '../../../state';
import { NextPage, BackPage } from '../../../actions/nextPage';

class Commits extends React.Component<any, {}> {

    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <Card className="sectionCard">
                <div className="headerSection">
                    <div>
                        <div>You have done...</div>
                        <div className="headerNumberContainer">
                            <div className="headerNumber">{ this.props.user_main_data.commits }</div>
                            <div className="bigNumeberRepoTextContainer">&nbsp;&nbsp;&nbsp;commits</div>
                        </div>
                    </div>
                </div>
                <div className="sectionContent">
                    <div>
                        <h2 className="repoSubSection">Your commits</h2>
                        <div className="bigNumeberRepo">{ this.props.user_main_data.commits_contributor }</div>
                        <div className="bigNumeberRepoText">Percentage</div>
                        <div className="bigNumeberRepo">{ this.props.user_main_data.commits_contributor_percentage }%</div>
                        <div className="bigNumeberRepoText"></div>
                    </div>
                    <div>
                        <h2 className="repoSubSection">Your contributors commits</h2>
                        <div className="bigNumeberRepo">{ this.props.user_main_data.commits_user }</div>
                        <div className="bigNumeberRepoText">Percentage</div>
                        <div className="bigNumeberRepo">{ this.props.user_main_data.commits_user_percentage }%</div>
                        <div className="bigNumeberRepoText"></div>
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

interface IDispatch {
    nextPage: () => void;
    backPage: () => void;
}

const mapDispatchToProps = (dispatch: any): IDispatch => ({
    nextPage: () => dispatch(NextPage()),
    backPage: () => dispatch(BackPage())
});

const mapStateToProps = ({ user_main_data }: IGitInspectState) => ({ user_main_data });

export default connect(mapStateToProps, mapDispatchToProps)(Commits);
