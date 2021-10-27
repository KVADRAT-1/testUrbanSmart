import './Profile.css'
import { useSelector } from 'react-redux'

function Profile(props) {
  const login = useSelector(state => state.login)
  return (
    <div className="Profile">
      <h1 className="Text">{login}</h1>
    </div>
  )
}

export default Profile
