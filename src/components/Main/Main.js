import './Main.css'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

function Main(props) {
  const button = document.querySelector('.buttonLogin')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [formValid, setFormValid] = useState(false)
  const dispatch = useDispatch()

  function onChangeLogin(e) {
    setLogin(e.target.value)
  }

  function onChangePassword(e) {
    setPassword(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault()
    dispatch({ type: 'ADD_LOGIN', payload: login })
    props.setLoggedIn(true)
  }

  useEffect(() => {
    if (button === null) {
      return
    }
    if (login === 'developer21' && password === '123456') {
      setFormValid(true)
      button.classList.add('active')
    } else {
      setFormValid(false)
      if (button.classList.contains('active')) {
        button.classList.remove('active')
      }
    }
  }, [login, password])

  return (
    <form className="Main" onSubmit={onSubmit}>
      <input
        className="login"
        type="login"
        name="login"
        required
        onChange={onChangeLogin}
        value={login}
        placeholder="Login"
      ></input>
      <input
        className="password"
        type="password"
        name="password"
        required
        onChange={onChangePassword}
        value={password}
        placeholder="Password"
      ></input>
      <button className="buttonLogin" disabled={!formValid}>
        Войти
      </button>
    </form>
  )
}

export default Main
