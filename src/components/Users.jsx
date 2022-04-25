import { useState, useEffect } from 'react'
import axios from 'axios'

import Card from './Card'

const Users = () => {
  //user state
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [userLoading, setUserLoading] = useState(false)

  //search payload state
  const [searchKeyword, setSearchKeyword] = useState('')

  //handle input search
  const handleSearchKeyword = (event) => {
    setSearchKeyword(event.target.value)
    const tempUsers = users.filter(user => user.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setFilteredUsers(tempUsers)
  }

  //handle search filter
  const handleFilter = (e) => {
    e.preventDefault()
    const tempUsers = users.filter(user => user.name.toLowerCase().includes(searchKeyword.toLowerCase()))
    setFilteredUsers(tempUsers)
  }

  //call API to get user and update the state
  useEffect(() => {
    setUserLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      setUsers(res.data)
      setFilteredUsers(res.data)
      setUserLoading(false)
    }).catch(error => {
      console.log("error in api call", error)
      setUserLoading(false)
    })

  }, [])
  return (
    <div>
      {          /** Filter input field and filter logic */}

      <form onSubmit={handleFilter}>
        <input type="text" placeholder="Type text to filter" onChange={handleSearchKeyword} />
        <input type="submit" value="search" />
      </form>

      {/** Render the photo cards */}
      {
        userLoading && <h3> Loading...</h3>
      }
      {
        !userLoading && filteredUsers && <div className="photo-list">
          {
            filteredUsers.map(user => (
              <Card key={user.id} {...user} />
            ))
          }


        </div>
      }
    </div>
  )
}

export default Users