import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';



function Header() {
    const[active, setActive] = useState(false)

    const handleClick =()=> {
        setActive(!active)
    }
    const closeMobileMenu =()=> setActive(false)
  return (
    <div className='header'>
        <div className="logo">
            <h2>Anda's Shoes Collection</h2>
        </div>
        <nav className={active ? 'active': 'closed'}>
            <ul >
                <li>
                    <Link to='/' title='Home' onClick={closeMobileMenu}>Home</Link>
                </li>
                <li>
                    <Link to='/cartpage' title='Cart' onClick={closeMobileMenu}>Cart</Link>
                </li>
                <li>
                    <Link to='/about' title='About us' onClick={closeMobileMenu}>About us</Link>
                </li>
                <li>
                    <Link to='/contact' title='contact us' onClick={closeMobileMenu}>Contact us</Link>
                </li>
            </ul>
        </nav>
        <div className="menu">
                <span className="menu-bar" onClick={handleClick}>{active ? <AiOutlineClose className='menu-icon' /> : <AiOutlineMenu className='menu-icon' />}</span>
        </div>
    </div>
  )
}

export default Header