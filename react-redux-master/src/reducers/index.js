import {combineReducers} from 'redux'; 

const counter = (state=0, action) => {
  if (action.type === "INCREMENT") {
    return state + action.inc; // increase the value of counter  
  }  
  return state; // return the current value of the counter 
}

const myReducer = combineReducers({counter}); 

export default myReducer; 