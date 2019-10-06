import * as React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { IGitInspectState } from '../../../state';
import '../../../style/section.css';
import { NextPage } from '../../../actions/nextPage';
import { Button } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import '../../../style/code.css';

const data = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"]
    }],
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
};

let dataCode = {};
let dataTopics = {};

class Code extends React.Component<any, {}> {

    constructor(props:any){
        super(props);
        // props.user_main_data.languages.forEach((element:any) => {
        //     console.log("elemement",element);
        // });
        console.log("WHAT I HAVVE",this.props.user_main_data.languages);
    }

    public render(): React.ReactElement<any>{

        return(
            <Card className="sectionCard">
                <div className="sectionContentCode">
                    <div className="subSectionContainer">
                        <h2 className="codeSubSection">Languages</h2>
                        <div className="pieContainer">
                            <Doughnut data={data}/>
                        </div>
                    </div>
                    <div className="subSectionContainer">
                        <h2 className="codeSubSection">Topics</h2>
                        <div className="pieContainer">
                            <Doughnut data={data}/>
                        </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Code);