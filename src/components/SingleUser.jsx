import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SingleUser = () => {

  const [user, setUser] = useState({})

  const params = useParams()

  //call API to get user and update the state
  useEffect(() => {
    console.log("params", params)
    axios.get(`https://jsonplaceholder.typicode.com/users/${params.userId}`).then(res => {
      setUser(res.data)
    }).catch(error => {
      console.log("error in api call", error)

    })

  }, [params])

  return (
    <div className="photo-card">
      <p>Name:{user.name} </p>
      <p>Username:{user.username} </p>
      <p>Email:{user.email}</p>
      <p>Phone:{user.phone}</p>
    </div>
  )
}

export default SingleUser;