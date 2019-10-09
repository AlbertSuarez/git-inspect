import * as React from 'react';
import '../../../style/section.css';
import '../../../style/friends.css';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';
import { IGitInspectState } from '../../../state';
import { NextPage, BackPage } from '../../../actions/nextPage';

class Friends extends React.Component<any, {}> {

    public render(): React.ReactElement<any> {
        console.log("CONT", this.props.user_main_data.contributors);
        return (
            <Card className="sectionCard">
                {
                    this.props.user_main_data.contributors.length === 0
                        ? (<div className="headerSection">
                                <h1 className="profileName">You don't have any contributor... It's so sad</h1>
                            </div>)
                        : (<div>
                                <div className="headerSection">
                                    <h1 className="profileName">Here are your contributors...</h1>
                                </div>
                                <div className="sectionContentFriends">
                                    { this.props.user_main_data.contributors.map((contributor: any, index: number) =>
                                            <div key={ index } className="friendsListCardContent" onClick={ () => this.openProfile(contributor.url) }>
                                                <div className="cardProfilePhoto">
                                                    <img alt="Contributor Profile" src={ contributor.photo }/>
                                                </div>
                                                <div className="cardTextContainer">
                                                    <div className="friendFullName">{ contributor.label }</div>
                                                    <div className="friendExperience">{ contributor.commits } commits</div>
                                                </div>
                                            </div>
                                    )}
                                </div>
                            </div>)
                }
                <div className="footerContent">
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={ () => this.props.backPage() }
                        className="nextSectionButton">
                        Back
                    </Button>
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
    };

    private openProfile(url: string) {
        window.open(url, '_blank');
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

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
