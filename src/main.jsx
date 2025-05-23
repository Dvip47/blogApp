import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as BroweserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import store from './store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BroweserRouter>
    <App />
      </BroweserRouter>
    </Provider> 
  </StrictMode>,
)
