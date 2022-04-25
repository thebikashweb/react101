import { Link } from 'react-router-dom'

const Card = (props) => {
  const { id, name, username, email } = props
  return (
    <div className="photo-card">
      <p>Name: <Link to={`/users/${id}`}>{name}</Link></p>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
    </div>
  )
}

export default Card;