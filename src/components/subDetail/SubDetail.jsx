import React from 'react';
import './sub.css';

function SubDetail({ fName, lName, date, email }) {
  return (
    <div className='sub_details'>
      <div className="sub_head">
        <h3>{fName} {lName}</h3>
        <div className="date_sub">
          <span>{date}</span>
        </div>
      </div>
      <div className="sub_email">
        <span>{email}</span>
        <div className="del_sub"></div>
      </div>
    </div>
  )
}

export default SubDetail