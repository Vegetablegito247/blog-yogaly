import React from 'react';
import '../blogDetails/detailDash.css';

function ClassDetails({image, title, tutor, time, description}) {
    return (
        <div className='detail_dash'>
            <div className="blog_image">
                <img src={image} alt="" />
            </div>
            <div className="blog_info">
                <div className="blog_title">
                    <h3>{title}</h3>
                    <span>{tutor} | {time}</span>
                </div>
                <div className="blog_summary">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ClassDetails