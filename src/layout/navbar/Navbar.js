import React, {useState} from 'react'
import {Link} from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {

    const [toggleShow, setToggleShow] = useState(false);

    const toggleNavBarTest = () => {
        console.log('hambiurger menu clicked!')
        setToggleShow(!toggleShow);
    }

    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__logo" onClick={()=> setToggleShow(false)}> 
                    <Link to="">Student App</Link>
                </div>
                <div className={"navbar__items " + (toggleShow && 'navbar__items--show')}>
                    <ul onClick={()=> toggleNavBarTest()}>
                        <Link to="/"><li>Students</li></Link>
                        <Link to="contact"><li>Contact</li></Link>
                        <Link to="about"><li>About</li></Link>
                    </ul>
                </div>

                <div 
                    className="navbar__hamburger"
                    onClick={() => toggleNavBarTest()}
                >
                    =
                </div>
            </div>
        </div>
    )
}

export default Navbar