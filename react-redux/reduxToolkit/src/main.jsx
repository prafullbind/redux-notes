import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import accountReducer from "./slices/accountSlice.js";
import bonusReducer from "./slices/bonusSlice.js";
import { Provider } from 'react-redux';
import rewardReducer from './reducers/reward.js'
import { adminApi } from './api/adminSlice.js'

const store = configureStore({
  reducer: {
      account: accountReducer,
      bonus: bonusReducer,
      reward: rewardReducer,
      [adminApi.reducerPath]: adminApi.reducer
  },
   // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
