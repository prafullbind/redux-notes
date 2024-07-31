import axios from "axios";

//action name constants

//const init = 'account/init';
export const inc = 'account/increment';
export const dec = 'account/decrement';
export const incByAmt = 'account/incrementByAmount';
export const getAccUserPending = 'account/getUser/pending';
export const getAccUserFulFilled = 'account/getUser/fulfilled';
export const getAccUserRejected = 'account/getUser/rejected';
export const incBonus = 'bonus/increment';


//Action creators

// For variable id 

export function getUserAccount(id){
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

export function getAccountUserFulFilled(value){
    return {type: getAccUserFulFilled, payload: value}
}

export function getAccountUserRejected(error){
    return {type: getAccUserRejected, error: error}
}

export function getAccountUserPending(){
    return {type: getAccUserPending}
}

export function increment(){
    return {type: inc};
}

export function decrement(){
    return {type: dec};
}

export function incrementByAmount(value){
    return {type: incByAmt, payload:value};
}

export function incrementBonus(){
    return {type: incBonus};
}
