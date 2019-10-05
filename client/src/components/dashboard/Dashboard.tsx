import * as React from 'react';
import { connect } from 'react-redux';
import { IGitInspectState } from '../../state';
import '../../style/dashboard.css';
import { NextPage } from '../../actions/nextPage';
import GeneralInfo from '../sections/generalInfo/GeneralInfo';
import YourRepositories from '../sections/YourRepositories/YourRepositories';
import { Link, Element as Element, animateScroll as scroll } from "react-scroll";

class Dashboard extends React.Component<any, {}> {

    constructor(props:any){
        super(props);
    }
    
    public render(): React.ReactElement<any>{
        return(
            <Element name="dashboardScroll" id="dashboardContainer" className="dashboardContent">
                <div id="generalInfoSection"  className="dashboardSection">
                    <GeneralInfo/>
                    <Link
                        activeClass="active"
                        to="yourRepositoriesSection"
                        spy={true}
                        smooth={true}
                        containerId="dashboardContainer"
                        duration={500}
                    >
                        Section 3
                    </Link>
                </div>
                <div id="yourRepositoriesSection" className="dashboardSection">
                    <YourRepositories/>
                </div>
            </Element>
        );
    }

    // public componentDidUpdate(prevProps: any) {
    //     console.log("NEW PROPS",this.props);
        // $("#generalInfoSection")[0].css({left: ""});
        // $("#generalInfoSection")[0].animate([
        //     // keyframes
        //     { transform: 'translateX(+70%)' }, 
        //     { transform: 'translateY(0px)' }
        //   ], { 
        //     // timing options
        //     duration: 500,
        //     iterations: 1
        //   });
        // console.log("NEW PROPS",$("#generalInfoSection")[0]);
    // }
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