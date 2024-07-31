import { getAccUserFulFilled, 
         getAccUserRejected,
         getAccUserPending,
         inc,
         dec,
         incByAmt,
        } from "../actions";

export function accountReducer(state={amount:1}, action){
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