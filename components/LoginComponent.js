import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import { Link, browserHistory } from 'react-router'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export default class LoginComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
    // console.log(this.state.email); :)
  }

  handlePassChange(event) {
    this.setState({pass: event.target.value});
    // console.log(this.state.pass); :)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Email: ' + this.state.email);
    console.log('Pass: '  + this.state.pass);
    browserHistory.push('/');
  }  

  render() {
    return (
      <div style={{maxWidth: '500px', margin: '0 auto', padding: '15px'}}>
        <Card>
          <CardTitle style={{paddingBottom: '5px'}} title="Login..." />
          <CardText style={{paddingTop: 0}}>
            <form onSubmit={this.handleSubmit}>
              <TextField 
                style={{width:'100%'}} 
                hintText="Email"
                value={this.state.email}
                onChange={this.handleEmailChange} />
              <TextField 
                style={{width:'100%', marginBottom: '20px'}} 
                hintText="Password"
                value={this.state.pass}
                onChange={this.handlePassChange} />
            
              <RaisedButton label="Log in" primary={true} type="submit" />
              <Link style={{float: 'right', marginTop: '18px'}} to="/forgot-password">Forgot password</Link>
            </form>
          </CardText>
        </Card>
      </div>
    );
  }
}

