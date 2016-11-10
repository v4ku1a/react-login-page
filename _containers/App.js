import React from 'react';
import { connect } from 'react-redux' 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

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
 
function select(state) {
  return {
    data: state
  };
}
 
export default connect(select)(App);
