import * as React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { SubmitLogin } from '../../actions/submitLogin';
import { IGitInspectState } from '../../state';
import '../../style/home.css';

class HomePage extends React.Component<any, {}> {
  
  constructor(props:any){
    super(props);
  }

  public render(): React.ReactElement<any>{
    return(
      <div className="centered">
        <TextField
          id="outlined-dense"
          label="Github Username"
          className="homeInput"
          margin="dense"
          variant="outlined"
        />
        <Button 
          variant="contained" 
          color="primary"
          className="homeButton">
          Submit
        </Button>
      </div>
    );
  }
}

interface IDispatch{
  submitLogin:(username: string) => void;
}

const mapDispatchToProps = (dispatch:any):IDispatch => {
  return{
      submitLogin:(username: string) => {
          return dispatch(SubmitLogin(username));
      }
  };
};

const mapStateToProps = (state: IGitInspectState) => ({
  
});

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);