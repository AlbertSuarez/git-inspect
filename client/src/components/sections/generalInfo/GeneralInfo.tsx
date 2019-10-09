import * as React from 'react';
import '../../../style/section.css';
import { connect } from 'react-redux';
import '../../../style/generalInfo.css';
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';
import { IGitInspectState } from '../../../state';
import { NextPage } from '../../../actions/nextPage';

class GeneralInfo extends React.Component<any, {}> {

    public render(): React.ReactElement<any> {
        return (
            <Card className="sectionCard">
                <div className="headerSection">
                    <img src={ this.props.user_main_data.photo } alt="Profile" className="profileImg"></img>
                    {/* <h1 className="profileName">{this.props.user_main_data.username}</h1> */}
                </div>
                <div className="sectionContent">
                    <div className="subSection">
                        <div className="subSectionTitleContainer"><h2>Interaction</h2></div>
                        <div className="subSectionContent">
                            <div>
                                <div className="bigNumeber">{ this.props.user_main_data.followers }</div>
                                <div className="bigNumeberText">Followers</div>
                            </div>
                            <div>
                                <div className="bigNumeber">{ this.props.user_main_data.following }</div>
                                <div className="bigNumeberText">Following</div>
                            </div>
                        </div>
                    </div>
                    <div className="subSection">
                        <div className="subSectionTitleContainer"><h2>Public Activity</h2></div>
                        <div className="subSectionContent">
                            <div>
                                <div className="bigNumeber">{ this.props.user_main_data.public_repos }</div>
                                <div className="bigNumeberText">Public Repos</div>
                            </div>
                            <div>
                                <div className="bigNumeber">{ this.props.user_main_data.public_gists }</div>
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
                        onClick={ () => this.props.nextPage() }
                        className="nextSectionButton">
                        Next
                    </Button>
                </div>
            </Card>
        );
    }

}

interface IDispatch {
    nextPage: () => void;
}

const mapDispatchToProps = (dispatch: any): IDispatch => ({
    nextPage: () => dispatch(NextPage())
});

const mapStateToProps = ({ user_main_data }: IGitInspectState) => ({ user_main_data });

export default connect(mapStateToProps, mapDispatchToProps)(GeneralInfo);
