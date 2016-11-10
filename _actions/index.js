	export const LOGIN = 'LOGIN';
	import fetch from 'isomorphic-fetch';
	
	const login = (payload) => ({ 
	type: LOGIN, 
	payload 
	});
	
	export const userAuth = (payload) => {
	return dispatch => {
		fetch('auth')
		.then(a => dispatch( login(payload) ));
	}
	}