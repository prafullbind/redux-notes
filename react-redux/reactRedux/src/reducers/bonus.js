import { incBonus, incByAmt } from "../actions";

export function bonusReducer(state={points:0}, action){
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