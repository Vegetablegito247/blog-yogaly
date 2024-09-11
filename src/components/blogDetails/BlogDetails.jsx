import React from 'react';
import './detailDash.css'

function BlogDetails({image, title, author, date, summary}) {
  return (
    <div className='detail_dash'>
        <div className="blog_image">
            <img src={image} alt="" />
        </div>
        <div className="blog_info">
            <div className="blog_title">
                <h3>{title}</h3>
                <span>{author} | {date}</span>
            </div>
            <div className="blog_summary">
                <p>{summary}</p>
            </div>
        </div>
    </div>
  )
}

export default BlogDetails