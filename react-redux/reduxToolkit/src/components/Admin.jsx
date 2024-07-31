import React, { useState } from 'react'
import { useAddAccountMutation, useDeleteAccountMutation, useGetAccountsQuery, useUpdateAccountMutation } from '../api/adminSlice';

const Admin = () => {
 
  const {data, error, isLoading, isSuccess} = useGetAccountsQuery();
  const [addAccount, response] = useAddAccountMutation(); //response(2nd argument) is used for different use
  const [deleteAccount, response1] = useDeleteAccountMutation();
  const [updateAccount, response2] = useUpdateAccountMutation();

     
  return (
    <div className="card">
    <div className="container">
      <h4>
        <b>Admin Component</b>
      </h4>
      {isLoading ? <p>Loading...</p> : null}
      {isSuccess && data && data.map(account=><p>{account.id} : {account.amount}
        <button onClick={() => deleteAccount(account.id)}>Delete Account</button>
        <button onClick={() => updateAccount({id:account.id, amount:777})}>Update Account</button>
      </p>)}
      <button onClick={() => addAccount(101,data.length+1)}>Add Account +</button>
    </div>
  </div> 
  )
}

export default Admin;