import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
/* Redux */
import { StoreProvider } from 'easy-peasy'
import store from './store'
/* Components */
import App from './App'

ReactDOM.render(
  <StoreProvider store={store}>
    <Router>
      <App />
    </Router>
  </StoreProvider>,
  document.getElementById('root')
)
