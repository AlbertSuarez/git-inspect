import * as React from 'react';
import '../../style/loader.css';
import { connect } from 'react-redux';
import { IGitInspectState } from '../../state';

class Loader extends React.Component<any, any> {

    public render() {
        return (
            <div className={ this.props.isBusy ? "loader-show" : "loader-hide" }>
                <div className="loader"></div>
            </div>
        );
    }

}

interface IDispatch { }

const mapDispatchToProps = (dispatch: any): IDispatch => ({ });

const mapStateToProps = ({ isBusy }: IGitInspectState) => ({ isBusy });

export default connect(mapStateToProps,mapDispatchToProps)(Loader);
