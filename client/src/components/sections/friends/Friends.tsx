import * as React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { IGitInspectState } from '../../../state';
import { NextPage } from '../../../actions/nextPage';
import { Button } from '@material-ui/core';
import '../../../style/section.css';
import '../../../style/friends.css';

class Friends extends React.Component<any, {}> {

    constructor(props:any){
        super(props);
    }

    public render(): React.ReactElement<any>{

        console.log("CONT",this.props.user_main_data.contributors);

        return(
            <Card className="sectionCard">
                {
                    this.props.user_main_data.contributors.length==0 ?
                        (<div className="headerSection">
                            <h1 className="profileName">You don't have any contributor... It's so sad</h1>
                        </div>) :
                        (<div>
                            <div className="headerSection">
                                <h1 className="profileName">Here are your contributors...</h1>
                            </div>
                            <div className="sectionContent"> 
                                {this.props.user_main_data.contributors.map((contributor: any)=>{
                                    return(
                                        <div className="friendsListCardContent">
                                            <div className="cardProfilePhoto">
                                                <img src={contributor.photo}/>
                                            </div>
                                            <div className="cardTextContainer">
                                                <div className="friendFullName">{contributor.label}</div>
                                                <div className="friendExperience">{contributor.commits+" commits"}</div>
                                            </div>
                                            {/* <div className="cardRightArrow">
                                                <img className='friendsIcon' src={rightArrow}></img>
                                            </div> */}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>)
                }
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
    };

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

export default connect(mapStateToProps,mapDispatchToProps)(Friends);