import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import { Link, browserHistory } from 'react-router'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import * as EmailValidator from 'email-validator';
import debounce from 'debounce';


export default class LoginComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.validateEmailDebounce = debounce(this.validateEmail, 200);
    this.validatePassDebounce = debounce(this.validatePass, 200);
  }

  validatePass(pass) {
    let isValid = true;
    let validationMsg = '';

    if( typeof pass !== 'string' ) {
      isValid = false;
      validationMsg = 'Please enter the password'; // might be some l18n string
    }

    if( !pass.length || pass.length < 6 ) {
      isValid = false;
      validationMsg = 'Please enter at least 6 characters';
    }

    this.setState({passErrorText: validationMsg});
    return isValid;
  }

  validateEmail(email) {
    let isValid = true;
    let validationMsg = '';

    if( typeof email !== 'string' || email.length === 0 ) {
      isValid = false;
      validationMsg = 'Please enter Email';
    }

    if( !EmailValidator.validate(email) ) {
      isValid = false;
      validationMsg = 'Please enter correct Email';
    }

    this.setState({emailErrorText: validationMsg});
    return isValid;
  }

  handleEmailChange(event) {
    this.validateEmailDebounce(event.target.value);
    this.setState({email: event.target.value});
  }

  handlePassChange(event) {
    this.validatePassDebounce(event.target.value);
    this.setState({pass: event.target.value});
  }

  handleSubmit(event) {
    let formValid = true;    
    event.preventDefault();

    if( !this.validatePass(this.state.pass) ) {
      formValid = false;
    }

    if( !this.validateEmail(this.state.email) ) {
      formValid = false;
    }

    if(formValid) {
      console.log('Email: ' + this.state.email);
      console.log('Pass: '  + this.state.pass);
      browserHistory.push('/');
    } else {
      console.log('Form invalid');
    }
  }  

  render() {
    return (
      <div style={{maxWidth: '500px', margin: '0 auto', padding: '15px'}}>
        <Card>
          <CardTitle style={{paddingBottom: '5px'}} title="Login..." />
          <CardText style={{paddingTop: 0}}>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <TextField 
                style={{width:'100%'}} 
                hintText="Email"
                errorText={this.state.emailErrorText}
                value={this.state.email}
                onChange={(e) => this.handleEmailChange(e)} />
              <TextField 
                style={{width:'100%', marginBottom: '20px'}} 
                type='password'
                hintText="Password"
                errorText={this.state.passErrorText}
                value={this.state.pass}
                onChange={(e) => this.handlePassChange(e)} />
            
              <RaisedButton label="Log in" primary={true} type="submit" />
              <Link style={{float: 'right', marginTop: '18px'}} to="/forgot-password">Forgot password</Link>
            </form>
          </CardText>
        </Card>
      </div>
    );
  }
}

