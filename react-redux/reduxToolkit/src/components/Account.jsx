import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement, incrementByAmount, getUserAccount} from '../slices/accountSlice';

const Account = () => {
    const [value, setValue] = useState(0);
 
    const amount = useSelector(state=> state.account.amount);
    const dispatch = useDispatch();

  return (
    <div className='card'>
        <div className='container'>
            <h4>
                <b>Account Component</b>
            </h4>
            <h3>Amount:${amount}</h3>
            <button onClick={()=> dispatch(increment())}>Increment +</button>
            <button onClick={()=> dispatch(decrement())}>Decrement -</button>
            <input type='text'  onChange={(e) => setValue(+e.target.value)}  />
            <button onClick={()=> dispatch(incrementByAmount(value))}>Increment By {value>0 ? value : ""} +</button>
            <button onClick={()=> dispatch(getUserAccount(1))}>Get User</button>
        </div>
    </div>
  )
}

export default Account;