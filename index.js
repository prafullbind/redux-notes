import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";
//Action declare constant

const inc = 'increment';
const dec = 'decrement';
const incByAmount = 'incrementByAmount';
const init = 'init';

//store
const store = createStore(reducer, applyMiddleware(logger.default, thunk.default));

const history = [];



//reducer

function reducer(state={amount:1}, action){

    // if(action.type === inc){
    //     //don't use this in redux for changing state 
    //     // Because this is a immutability
    //    // state.amount = state.amount+1;

    //     return {amount: state.amount+1};
    // }
    // else if(action.type === dec){
    //     return {amount: state.amount-1}
    // }

    // else if(action.type === incByAmount){
    //     return { amount: state.amount+action.payload}
    // }

    // Here you can use switch case instead of if condition

   switch(action.type){
    case init: 
     return {amount: action.payload};
     case inc: 
     return {amount: state.amount+1};
     case dec: 
     return {amount: state.amount-1};
     case incByAmount: 
     return { amount: state.amount+action.payload};
     default:
        return state;
    }
   

    // return state;
}

//global state
//getSate will give you access of global state
// console.log(store.getState());

//Here using subscribe for console the store value when any dispatch triggered

// store.subscribe(() => {
//     console.log(store.getState());
// })


// store.subscribe(() => {
//     history.push(store.getState());
//     console.log(history);
// })

//Async API call this is not standard practice

//  async function getUser(){
//     const { data } = await axios.get("http://localhost:3000/accounts/1");
//     console.log(data);
//  }

//  getUser();


//Action creators

// async function initUser(){
//     const { data } = await axios.get("http://localhost:3000/accounts/1");
//     return {type: init, payload: data.amount};
// }


//  async function getUser(dispatch, getState){
//     // in above initUser function case
//     // if you call promises directly like as async await then give error because dispatch action should be synchronous not asynchronous 
//     // Becase dispatch want instant dispatch action. I can not be hold directly
//     // for this problem solved by redux-thunk
//     //It gives you variety like that wait to complete async and then dispatch action
//     // In this you will pass function when calling dispatch not passing action type like as only "initUser"
//     // And then redux-thunk will you provide two arguments like as (dispatch and getState)


//     const { data } = await axios.get("http://localhost:3000/accounts/1");
//     dispatch(initUser(data.amount));
// }

// For variable id 

    function getUser(id){
    return  async (dispatch, getSate) => {
    const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
    dispatch(initUser(data.amount));
    }
}

function initUser(value){
    return {type: init, payload: value};
}

function increment(){
    return {type: inc};
}

function decrement(){
    return {type: dec};
}

function incrementByAmount(value){
    return {type: incByAmount, payload:value};
}

// setInterval(() => {
// store.dispatch(getUser(1));
// },2000);

setTimeout(() => {
    store.dispatch(getUser(2));
    },2000);

// console.log(store.getState());
