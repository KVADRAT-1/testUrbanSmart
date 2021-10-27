import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const defaulState = {
  login: '',
}

const reducer = (state = defaulState, action) => {
  switch (action.type) {
    case 'ADD_LOGIN':
      return { ...state, login: action.payload }
    default:
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
