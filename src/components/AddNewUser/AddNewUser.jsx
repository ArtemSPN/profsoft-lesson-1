import React, { useState } from 'react'
import cls from './AddNewUser.module.css'

const AddNewUser = ({title, func}) => {
    const [fname, setFname] = useState();
    const [sname, setSname] = useState();
    const [mail, setMail] = useState();
    const [url, setUrl] = useState();

    const addUser = () => {
        func(fname, sname, mail, url)
        setFname('')
        setMail('')
        setSname('')
        setUrl('')
    }


    return (
        <div className={cls.form}>
            {title + ' пользователя'}
            <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} placeholder='enter firstname'/>
            <input type="text" value={sname} onChange={(e) => setSname(e.target.value)} placeholder='enter lastname'/>
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder='enter url avatar'/>
            <input type="text" value={mail} onChange={(e) => setMail(e.target.value)} placeholder='enter email'/>
            <button onClick={addUser}>{title}</button>
        </div>
    )
}

export default AddNewUser