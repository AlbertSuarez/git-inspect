import * as React from 'react';
import { connect } from 'react-redux';
import { IGitInspectState } from '../../state';
import '../../style/dashboard.css';
import { NextPage } from '../../actions/nextPage';
import GeneralInfo from '../sections/generalInfo/GeneralInfo';
import YourRepositories from '../sections/YourRepositories/YourRepositories';
import { Link, Element as Element, animateScroll as scroll } from "react-scroll";

class Dashboard extends React.Component<any, any> {

    constructor(props:any){
        super(props);

        this.state = {
            generalInfoClass: "generalInfoShow",
            yourRepositoriesClass: "yourRepositoriesHidden"
        };
    }
    
    public render(): React.ReactElement<any>{

        console.log("DATA DASHBOARD", this.props);

        return(
            <div id="dashboardContainer" className="dashboardContent">
                <div className={this.state.generalInfoClass}>
                    <GeneralInfo/>
                </div>
                <div className={this.state.yourRepositoriesClass}>
                    <YourRepositories/>
                </div>
            </div>
        );
    }

    public componentWillReceiveProps(nextProps: any) {
        if(nextProps.section=="GENERAL INFO") {
            this.setState({
                generalInfoClass: "generalInfoShow",
                yourRepositoriesClass: "yourRepositoriesHidden"
            });
        }
        else if (nextProps.section=="YOUR REPOSITORIES"){
            this.setState({
                generalInfoClass: "generalInfoHidden",
                yourRepositoriesClass: "yourRepositoriesShow"
            });
        }
    }
}

interface IDispatch{
    
}

const mapDispatchToProps = (dispatch:any):IDispatch => {
    return{

    };
};

const mapStateToProps = (state: IGitInspectState) => ({
    section: state.section
});

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);