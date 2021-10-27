import './App.css'
import Main from '../Main/Main.js'
import Profile from '../Profile/Profile.js'
import ProtectedRoute from '../ProtectedRoute.js'
import { useState, useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const history = useHistory()

  useEffect(() => {
    if (loggedIn === false) {
      history.push('/')
    } else if (loggedIn === true) {
      history.push('/profile')
    }
  }, [loggedIn])

  return (
    <div className="App">
      <Route exact path="/">
        <Main setLoggedIn={setLoggedIn} />
      </Route>
      <Route exact path="/profile">
        <ProtectedRoute
          component={Profile}
          loggedIn={loggedIn}
        ></ProtectedRoute>
      </Route>
    </div>
  )
}

export default App
