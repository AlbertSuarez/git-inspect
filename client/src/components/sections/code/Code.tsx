import * as React from 'react';
import '../../../style/code.css';
import '../../../style/section.css';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import { IGitInspectState } from '../../../state';
import { NextPage,BackPage } from '../../../actions/nextPage';

let dataCode = {};
let dataTopics = {};

class Code extends React.Component<any, {}> {

    constructor(props:any){
        super(props);

        //CODE
        let labelsCode: any[] = [];
        let valuesCode: any[] = [];
        props.user_main_data.languages.forEach((element:any) => {
            labelsCode.push(element.label);
            valuesCode.push(element.amount);
        });

        dataCode = {
            datasets: [{
                data: valuesCode,
                backgroundColor: ["#88c440", "#ffc100","#009687","#ff5505","#6633b9","#9c1ab1","#eb1460","#00bbd5"]
            }],
            labels: labelsCode
        };

        //TOPICS
        let labelsTopics: any[] = [];
        let valuesTopics: any[] = [];
        props.user_main_data.topics.forEach((element:any) => {
            labelsTopics.push(element.label);
            valuesTopics.push(element.amount);
        });

        dataTopics = {
            datasets: [{
                data: valuesTopics,
                backgroundColor: ["#88c440", "#ffc100","#009687","#ff5505","#6633b9","#9c1ab1","#eb1460","#00bbd5"]
            }],
            labels: labelsTopics
        };
    }

    public render(): React.ReactElement<any> {
        return (
            <Card className="sectionCard">
                <div className="sectionContentCode">
                    <div className="subSectionContainer">
                        <h2 className="codeSubSection">Languages</h2>
                        <div className="pieContainer">
                            <Doughnut data={dataCode}/>
                        </div>
                    </div>
                    <div className="subSectionContainer">
                        <h2 className="codeSubSection">Topics</h2>
                        <div className="pieContainer">
                            { this.props.user_main_data.topics.length === 0 ? <div>No topics</div> : <Doughnut data={ dataTopics }/> }
                        </div>
                    </div>
                </div>
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
    }

}

interface IDispatch{
    nextPage: () => void;
    backPage: () => void;
}

const mapDispatchToProps = (dispatch: any): IDispatch => ({
    nextPage: () => dispatch(NextPage()),
    backPage: () => dispatch(BackPage())
});

const mapStateToProps = ({ user_main_data }: IGitInspectState) => ({ user_main_data });

export default connect(mapStateToProps, mapDispatchToProps)(Code);
