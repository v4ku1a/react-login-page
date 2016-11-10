	import React from 'react';
	import { connect } from 'react-redux'
	import { Link } from 'react-router'
	
	
	class HomeComponent extends React.Component {
	
	render() {
		console.log(this.props);
	
		let userMsg;
	
		if(this.props.data.loggedIn) {
		userMsg = (<h2>Welcome {this.props.data.name}!</h2>);
		} else {
		userMsg = (<h2><Link to="/login">Please login.</Link></h2>);
		}
	
		return (
		<div style={{margin: '30px', textAlign: 'center'}}>
			{ userMsg }
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
