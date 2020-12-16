import React from 'react'
import './Header.css'
import {Link} from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/ram">About</Link>
            <Link to="/use">Use</Link>
           
        </header>
  )
}

export default Header
