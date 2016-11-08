import { LOGIN } from '../actions' 
 
const data = {
    Name: '',
    loggedIn: false
};
 
export default function comments(state = data, action) { 
  switch (action.type) { 
    case LOGIN: 
      return action.payload; // imagine we reduce something here
    default: 
      return state 
  } 
} 
