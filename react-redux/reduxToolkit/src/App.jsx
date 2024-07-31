import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Account from './components/Account'
import Bonus from './components/Bonus'
import { useSelector } from 'react-redux'
import Reward from './components/Reward'
import Admin from './components/Admin'

function App() {
  const [count, setCount] = useState(0)
  const amount = useSelector(state=> state.account.amount);
  const points = useSelector(state=> state.bonus.points);

  return (
    <div className='App'>
    <h4>App</h4>
    <h3>Current Amount : {amount}</h3>
    <h3>Total Bonus : {points}</h3>
    <Account />
    <Bonus />
    <Reward />
    <Admin />
  </div>
  )
}

export default App
