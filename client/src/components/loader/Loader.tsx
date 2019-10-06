import * as React from 'react';
import { connect } from 'react-redux';
import { IGitInspectState } from '../../state';
import '../../style/loader.css';

class Loader extends React.Component<any, any> {

    public render(){
        return (    
            <div className={this.props.isBusy ? "loader-show" : "loader-hide"}>
                <div className="loader"></div>
            </div>
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
    isBusy: state.isBusy
});

export default connect(mapStateToProps,mapDispatchToProps)(Loader);