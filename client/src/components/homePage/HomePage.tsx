import * as React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { SubmitLogin } from '../../actions/submitLogin';
import { IGitInspectState } from '../../state';
import '../../style/home.css';

class HomePage extends React.Component<any, any> {
  
  constructor(props:any){
    super(props);

    this.state={
      username: "",
      error: false
    }
  }

  public render(): React.ReactElement<any>{
    return(
      <div className="centered">
        <TextField
          error={this.state.error}
          id="outlined-dense"
          label="Github Username"
          className="homeInput"
          onChange={this.changeUsername}
          margin="dense"
          variant="outlined"
        />
        <Button 
          variant="contained" 
          color="primary"
          onClick={this.submit}
          className="homeButton">
          Submit
        </Button>
      </div>
    );
  }

  public changeUsername = (event: any) => {
    this.setState({username: event.target.value, error: false});
  };

  private submit = () => {
    if(this.state.username=="") this.setState({error: true});
    else this.props.submitLogin(this.state.username);
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