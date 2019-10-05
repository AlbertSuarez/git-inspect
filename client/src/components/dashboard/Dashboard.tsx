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
            <div id="dashboardContainer" className={this.state.generalInfoClass}>
                <div className="dashboardSection">
                    <GeneralInfo/>
                </div>
                <div className="dashboardSection">
                    <YourRepositories/>
                </div>
            </div>
        );
    }

    public componentDidUpdate(prevProps: any) {
        console.log("NEW PROPS",this.props);
        //$("#generalInfoSection")[0].fadeOut()
        // $("#generalInfoSection")[0].animate([
        //     // keyframes
        //     { transform: 'translateX(+70%)' }, 
        //     { transform: 'translateY(0px)' }
        //   ], { 
        //     // timing options
        //     duration: 500,
        //     iterations: 1
        //   });
        //console.log("NEW PROPS",$("#generalInfoSection")[0]);
    }
}

interface IDispatch{
    
}

const mapDispatchToProps = (dispatch:any):IDispatch => {
    return{

    };
};

const mapStateToProps = (state: IGitInspectState) => ({
    scroll: state.scroll,
    scrollDirection: state.scrollDirection
});

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);