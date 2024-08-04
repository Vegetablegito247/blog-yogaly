import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import './navbar.css';

function Navbar() {
  return (
    <nav>
        <Link to='/' className="logo">
            <h3>YogaLy</h3>
        </Link>
        <div className="nav_list">
            <div className="list_item">
                <NavLink to='/about'>
                    <span>About</span>
                </NavLink>
                <NavLink to='/instructors'>
                    <span>Our Instructors</span>
                </NavLink>
                <NavLink to='/classes'>
                    <span>Classes</span>
                </NavLink>
                <NavLink to='/blog'>
                    <span>Blog</span>
                </NavLink>
            </div>
            <div className="nav_book">
                <button>Book a Class</button>
            </div>
        </div>
        <div className="nav_burger">
            <GiHamburgerMenu />
        </div>
    </nav>
  )
}

export default Navbar