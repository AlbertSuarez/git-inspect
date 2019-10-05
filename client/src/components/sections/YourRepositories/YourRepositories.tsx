import * as React from 'react';
import { connect } from 'react-redux';
import { IGitInspectState } from '../../../state';
import Card from '@material-ui/core/Card';
import '../../../style/section.css';

class YourRepositories extends React.Component<any, {}> {
    
    public render(): React.ReactElement<any>{
        return(
            <Card className="sectionCard">

            </Card>
        );
    }
}

interface IDispatch{
    
}

const mapDispatchToProps = (dispatch:any):IDispatch => {
    return{
        
    };
};

const mapStateToProps = (state: IGitInspectState) => ({

});

export default connect(mapStateToProps,mapDispatchToProps)(YourRepositories);