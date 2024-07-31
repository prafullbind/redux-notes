import {createStore, applyMiddleware, combineReducers} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

// In this file added new fields such as  bonus points in db.json then doing rest of code here after that changes

//Action declare constant

// const inc = 'increment';
// const dec = 'decrement';
// const incByAmt = 'incrementByAmount';
// const init = 'init';
// const incBonus = 'incBonus';


// this is only for readable different different reducer action name 
const init = 'account/init';
const inc = 'account/increment';
const dec = 'account/decrement';
const incByAmt = 'account/incrementByAmount';
const getAccUserPending = 'account/getUser/pending';
const getAccUserFulFilled = 'account/getUser/fulfilled';
const getAccUserRejected = 'account/getUser/rejected';
const incBonus = 'bonus/increment';

//store
const store = createStore( combineReducers({account: accountReducer, bonus: bonusReducer}), applyMiddleware(logger.default, thunk.default));

const history = [];



//reducer

// function accountReducer(state={amount:1}, action){

//     // Here you can use switch case instead of if condition

//    switch(action.type){
//     case init: 
//      return {amount: action.payload};
//      case inc: 
//      return {amount: state.amount+1};
//      case dec: 
//      return {amount: state.amount-1};
//      case incByAmt: 
//      return { amount: state.amount+action.payload};
//      default:
//         return state;
//     }
   
// }

//this is using for catching error when fetching data and put error in response with error coming from action 

function accountReducer(state={amount:1}, action){

    // Here you can use switch case instead of if condition

   switch(action.type){
    case getAccUserFulFilled: //now init not required because using this action 
    //  return {amount: action.payload};
    return {amount: action.payload, pending: false}; //pending field is required because when result success or error then should be change the pending value because on ui loader based on this status
    case getAccUserRejected: 
    //   return {...state, error:action.error}; // first time using error for catching error
    return {...state, error:action.error, pending:false};
    case getAccUserPending: 
      return {...state, pending: true}; // pending indicate status 
     case inc: 
     return {amount: state.amount+1};
     case dec: 
     return {amount: state.amount-1};
     case incByAmt: 
     return { amount: state.amount+action.payload};
     default:
        return state;
    }
}

function bonusReducer(state={points:0}, action){

    // Here you can use switch case instead of if condition

   switch(action.type){
     case incBonus: 
     return {points: state.points+1};
     case incByAmt:
        if(action.payload>=100) 
     return {points: state.points+1};
     default:
        return state;
    }
   
}


// For variable id 

    function getUserAccount(id){
    return  async (dispatch, getSate) => {
        //Now using try, catch block for catching error
    try{
        dispatch(getAccountUserPending()) //Pending shows when api call and take time then status will be pending and it is call before api call no need any arguments
       const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
    // dispatch(initUser(data.amount));
    dispatch(getAccountUserFulFilled(data.amount))
}
 catch(error){
    dispatch(getAccountUserRejected(error.message))
 }
    }
}

// function initUser(value){
//     return {type: init, payload: value};
// }

function getAccountUserFulFilled(value){
    return {type: getAccUserFulFilled, payload: value}
}

function getAccountUserRejected(error){
    return {type: getAccUserRejected, error: error}
}

function getAccountUserPending(){
    return {type: getAccUserPending}
}

function increment(){
    return {type: inc};
}

function decrement(){
    return {type: dec};
}

function incrementByAmount(value){
    return {type: incByAmt, payload:value};
}

function incrementBonus(){
    return {type: incBonus};
}

// setInterval(() => {
// store.dispatch(getUser(1));
// },2000);


setTimeout(() => {
    store.dispatch(getUserAccount(2));
    //store.dispatch(incrementByAmount(200))
    // store.dispatch(incrementBonus());
    },2000);

// console.log(store.getState());

