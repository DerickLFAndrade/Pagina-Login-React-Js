import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from './logo.png'


export default function Header() {
    return (
        <div> 
                <nav className="nav-bar">
                <li className="ls"><img className="logo" src={logo} /></li>
               
                    <ul className="list-n">
                        <li className="ls"><Link to="/teste"><button className="login">Login</button></Link></li>
                        <li className="ls"><button className="cadastro">Cadastro</button></li> 
                    </ul>
                </nav>
        </div>
    )
}
