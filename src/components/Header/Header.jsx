import React from 'react'
import cls from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className={cls.header}>
            <div className="container">
                <Link to={'/'}>
                    <h1 className={cls.headerText}>
                        Header
                    </h1>
                </Link>
            </div>
        </div>
    )
}

export default Header