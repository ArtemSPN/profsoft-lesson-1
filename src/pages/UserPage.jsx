import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import AddNewUser from '../components/AddNewUser/AddNewUser';
import { UserContext } from '../context/userContext';

const UserPage = () => {
    const [user, setUser] = useState();
    const {users, setUsers} = useContext(UserContext)
    const [update, setUpdate] = useState(false)
    const params = useParams();

    const updateUsers = ( fname,  sname, mail, url) => {
        setUser({id: users.length+1,
            email: mail || user.email,
            first_name: fname || user.first_name,
            last_name: sname || user.last_name,
            avatar: url || user.avatar})
        setUsers([...users, user])
    }

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
              <AddNewUser func={updateUsers} title={'изменить'}/>
          </div>
          :
          <div>Loading...</div>
          }
      </div>
    )
}

export default UserPage