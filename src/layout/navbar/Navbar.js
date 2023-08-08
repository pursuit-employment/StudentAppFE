import React from 'react'
import {Link} from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar__container">
            <div className="navbar__logo"> 
                <Link to="">Student App</Link>
            </div>
            <div className="navbar__items">
                <ul>
                    <Link to="/"><li>Students</li></Link>
                    <Link to="contact"><li>Contact</li></Link>
                    <Link to="about"><li>About</li></Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar