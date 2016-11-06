import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, hashHistory, browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import LoginComponent from './components/LoginComponent'
import ForgotPasswordComponent from './components/ForgotPasswordComponent'
import HomeComponent from './components/HomeComponent'

injectTapEventPlugin();


class App extends React.Component {
 
  render() {
    return (
      <MuiThemeProvider>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}


render((
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={HomeComponent}/>
      <Route path="login" component={LoginComponent}/>
      <Route path="forgot-password" component={ForgotPasswordComponent} />
    </Route>
  </Router>
), document.getElementById('App'));
