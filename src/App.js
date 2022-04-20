import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './store/user'

function App() {

  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loginHandler = e => {
    e.preventDefault()
    dispatch(login(username, password))
  }

  useEffect( () => {
    console.log(user)
  }, [user])

  if (user) {
    return (
      <div>
        Hi, {user.username}!
        <button onClick={() => dispatch(logout())}>
          Logout
        </button>
      </div>
    )
  }

  return (
    <div>
      <p>Enter credentials:</p>
      <form onSubmit={loginHandler} >
        <input 
          type='text'
          placeholder='username'
          value={username}
          onChange={ e => setUsername(e.target.value)}
        />
        <input 
          type='password'
          placeholder='password'
          value={password}
          onChange={ e => setPassword(e.target.value)}
        />
        <input 
          type='submit'
          value='Login'
        />
      </form>
    </div>
  );
}

export default App;
