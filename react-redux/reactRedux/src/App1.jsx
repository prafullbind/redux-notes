import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Account from './components/Account'
import Bonus from './components/Bonus'

function App({store}) {
  const [count, setCount] = useState(0)
  const [account, setAccount] = useState({amount:0});
  const [bonus, setBonus] = useState({points:0});

  const increment = () => {
    setAccount({amount:account.amount+1})
}

const decrement = () => {
    setAccount({amount:account.amount-1})
}

const incrementByAmount = (value) => {
    setAccount({amount:account.amount+value});
}


  return (
    <div className='App'>
      <h4>App</h4>
      <h3>Current Amount : {store.getState().account.amount}</h3>
      <h3>Total Bonus : {store.getState().bonus.points}</h3>
      <Account increment={increment} decrement={decrement} incrementByAmount={incrementByAmount} account={account} />
      <Bonus store={store}></Bonus>
    </div>
  )
}

export default App;
