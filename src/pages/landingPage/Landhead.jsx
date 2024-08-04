import React from 'react';
import { Link } from 'react-router-dom';
import './style/landHead.css'

function Landhead() {
  return (
    <header className='land_head'>
      <div className="land_head_info">
        <h3>Taking care of your mind, body and soul.</h3>
        <p>
          Familiarize yourself with our studio and course offering by signing up for a complimentary drop-in class now.
        </p>
        <Link to=''>Book a Class</Link>
      </div>
    </header>
  )
}

export default Landhead