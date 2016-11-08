import React from 'react';
import { connect } from 'react-redux'


class HomeComponent extends React.Component {
 
  render() {
    console.log(this.props.data);

    return (
      <div>
        Home!!!
      </div>
    );
  }
}

function select(state) {
  return {
    data: state
  };
}

export default connect(select)(HomeComponent);
