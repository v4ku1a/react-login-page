	import { LOGIN } from '../actions' 
	
	const defaultState = {
		loggedIn: false
	};
	
	export default function comments(state = defaultState, action) {
	
	// console.log(state);
	
	switch (action.type) { 
		case LOGIN: 
		return Object.assign({}, action.payload, {
			loggedIn: true,
		})
		default: 
		return state 
	} 
	} 
