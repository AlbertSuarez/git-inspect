import * as React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { IGitInspectState } from '../../../state';
import '../../../style/section.css';
import { NextPage } from '../../../actions/nextPage';
import { Button } from '@material-ui/core';

class Code extends React.Component<any, {}> {

    constructor(props:any){
        super(props);
    }

    public render(): React.ReactElement<any>{

        return(
            <Card className="sectionContent">
                <div className="headerSection"></div>
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