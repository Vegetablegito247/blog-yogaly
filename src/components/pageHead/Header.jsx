import React from 'react';
import './header.css'

function Header(props) {
  return (
    <header className='header'>
      <h1>{props.head}</h1>
    </header>
  )
}

export default Header