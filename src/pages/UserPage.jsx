import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UserPage = () => {
    const [user, setUser] = useState();
    const [update, setUpdate] = useState(false)
    const params = useParams();

    useEffect(() => {
      axios.get(`https://reqres.in/api/users/${params.id}`)
      .then((res) => setUser(res.data.data))
      .catch((e) => console.log(e))
     }, [])
    
     return (
      <div className='container'>
          {user
          ?
          <div className="userPageBody">
              <img src={user?.avatar} alt="avatar" width={200}/>
              <div className='info'>
                    <h1>{user.first_name + user.last_name}</h1>
                    <h2>{`email: ${user.email}`}</h2>
              </div>
          </div>
          :
          <div>Loading...</div>
          }
      </div>
    )
}

export default UserPage