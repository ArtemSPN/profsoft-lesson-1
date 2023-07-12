import React, { useState } from 'react'
import cls from './UserCard.module.css'
import { Link } from 'react-router-dom';

const UserCard = ({user, func}) => {
    const [update, setUpdate] = useState(false);
    return (
        <div className={cls.userCard}>
            <div className={cls.header}>
                <div className={cls.btns}>
                    <Link to={`/${user.id}`}>
                        <button className={cls.link}>Перейти на страницу</button>
                    </Link>
                    <button className={cls.delBtn} onClick={() => func(user.id)}>Удалить</button>
                </div>
            </div>
            <div className={cls.body}>
                <img src={user.avatar} alt="avatar"/>
                <div className={cls.info}>
                    <h2>{user.first_name + user.last_name}</h2>
                    <h3>{`email: ${user.email}`}</h3>
                </div>
            </div>
            
        </div>
    )
}

export default UserCard