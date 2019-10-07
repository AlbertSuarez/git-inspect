import * as React from 'react';
import '../../style/dashboard.css';
import { connect } from 'react-redux';
import Code from '../sections/code/Code';
import Music from '../sections/music/Music';
import { IGitInspectState } from '../../state';
import { NextPage } from '../../actions/nextPage';
import Commits from '../sections/commits/Commits';
import Friends from '../sections/friends/Friends';
import GeneralInfo from '../sections/generalInfo/GeneralInfo';
import YourRepositories from '../sections/YourRepositories/YourRepositories';
import { Link, Element as Element, animateScroll as scroll } from "react-scroll";

class Dashboard extends React.Component<any, any> {

    constructor(props:any) {
        super(props);

        this.state = {
            generalInfoClass:       "generalInfoShow",
            yourRepositoriesClass:  "yourRepositoriesHidden",
            codeClass:              "codeHidden",
            commitsClass:           "commitsHidden",
            friendsClass:           "friendsHidden",
            musicClass:             "musicHidden"
        };
    }

    public render(): React.ReactElement<any> {
        console.log("DATA DASHBOARD", this.props);
        return (
            <div id="dashboardContainer" className="dashboardContent">
                <div className={this.state.generalInfoClass}>
                    <GeneralInfo/>
                </div>
                <div className={this.state.yourRepositoriesClass}>
                    <YourRepositories/>
                </div>
                <div className={this.state.codeClass}>
                    <Code/>
                </div>
                <div className={this.state.commitsClass}>
                    <Commits/>
                </div>
                <div className={this.state.friendsClass}>
                    <Friends/>
                </div>
                <div className={this.state.musicClass}>
                    <Music/>
                </div>
            </div>
        );
    }

    public componentWillReceiveProps(nextProps: any) {
        switch (nextProps.section) {
            case "GENERAL INFO": {
                this.setState({
                    generalInfoClass:       "generalInfoShow",
                    yourRepositoriesClass:  "yourRepositoriesHidden",
                    codeClass:              "codeHidden",
                    commitsClass:           "commitsHidden",
                    friendsClass:           "friendsHidden",
                    musicClass:             "musicHidden"
                });
                break;
            }
            case "YOUR REPOSITORIES": {
                this.setState({
                    generalInfoClass:       "generalInfoHidden",
                    yourRepositoriesClass:  "yourRepositoriesShow",
                    codeClass:              "codeHidden",
                    commitsClass:           "commitsHidden",
                    friendsClass:           "friendsHidden",
                    musicClass:             "musicHidden"
                });
                break;
            }
            case "CODE": {
                this.setState({
                    generalInfoClass:       "generalInfoHidden",
                    yourRepositoriesClass:  "yourRepositoriesHidden",
                    codeClass:              "codeShow",
                    commitsClass:           "commitsHidden",
                    friendsClass:           "friendsHidden",
                    musicClass:             "musicHidden"
                });
                break;
            }
            case "COMMITS": {
                this.setState({
                    generalInfoClass:       "generalInfoHidden",
                    yourRepositoriesClass:  "yourRepositoriesHidden",
                    codeClass:              "codeHidden",
                    commitsClass:           "commitsShow",
                    friendsClass:           "friendsHidden",
                    musicClass:             "musicHidden"
                });
                break;
            }
            case "FRIENDS": {
                this.setState({
                    generalInfoClass:       "generalInfoHidden",
                    yourRepositoriesClass:  "yourRepositoriesHidden",
                    codeClass:              "codeHidden",
                    commitsClass:           "commitsHidden",
                    friendsClass:           "friendsShow",
                    musicClass:             "musicHidden"
                });
                break;
            }
            case "MUSIC": {
                this.setState({
                    generalInfoClass:       "generalInfoHidden",
                    yourRepositoriesClass:  "yourRepositoriesHidden",
                    codeClass:              "codeHidden",
                    commitsClass:           "commitsHidden",
                    friendsClass:           "friendsHidden",
                    musicClass:             "musicShow"
                });
                break;
            }
        }
    }
}

interface IDispatch { }

const mapDispatchToProps = (dispatch: any): IDispatch => ({ });

const mapStateToProps = ({ section }: IGitInspectState) => ({ section });

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
