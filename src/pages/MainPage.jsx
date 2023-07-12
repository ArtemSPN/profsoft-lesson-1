import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard/UserCard'
import AddNewUser from '../components/AddNewUser/AddNewUser'

const MainPage = () => {
    const [users, setUsers] = useState([])

    const delUser = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }

    const addUser = (fname, sname, mail, url) => {
        setUsers([...users, 
            {id: users.length+1, email: mail, first_name: fname, last_name: sname, avatar: url}]
            )
    }

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=1')
        .then((res) => setUsers(res.data.data))
        .catch((e) => console.log(e))
    }, [])

    return (
        <div className='container'>
           <div className="MainPage">
            <div className='userList'>
                    {
                        users.length !== 0 && 
                        users.map((user) => {
                            return <UserCard user={user} key={user.id} func={delUser}/>
                        })
                    }
                </div>
                <AddNewUser func={addUser}/>
           </div>
        </div>
    )
}

export default MainPage