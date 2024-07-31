
//This file is only for concept purpose not in use for this redux class

const state = {account: {amount:1}, bonus:{points:2}};
//const newState = {account: state.account, bonus:{points: state.bonus.points+1}} // It is not good practice like state.account directly because it create a mutable state of previous state also then you will get latest state
const newState = {account: {...state.account}, bonus:{points: state.bonus.points+1}} //It is good in this case not update previous state
console.log(newState, state);
state.account.amount = 100;
console.log(newState, state);