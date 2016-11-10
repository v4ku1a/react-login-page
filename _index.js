	import 'babel-polyfill';
	import React from 'react';
	import { render } from 'react-dom';
	import { Router, Route, IndexRoute, Link, hashHistory, browserHistory } from 'react-router';
	import { Provider } from 'react-redux';
	
	import configureStore from './store/configureStore';
	
	import LoginComponent from './components/LoginComponent';
	import ForgotPasswordComponent from './components/ForgotPasswordComponent';
	import HomeComponent from './components/HomeComponent';
	import App from './containers/App';
	
	
	const store = configureStore();
	
	render((
	<Provider store={store}>
		<Router history={browserHistory}>
		<Route path="/" component={App} >
			<IndexRoute component={HomeComponent}/>
			<Route path="login" component={LoginComponent} />
			<Route path="forgot-password" component={ForgotPasswordComponent} />
		</Route>
		</Router>
	</Provider>
	), document.getElementById('App'));
