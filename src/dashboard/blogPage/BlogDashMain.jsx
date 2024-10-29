import React from 'react';
import BlogDetails from '../../components/blogDetails/BlogDetails';
import { FaPlus } from "react-icons/fa";
import { handleOpenBlogForm } from '../../store/dashStore'
import { useDispatch, useSelector } from 'react-redux'
import BlogForm from '../../components/blogDetails/BlogForm'

function BlogDashMain() {
  const blogForm = useSelector((state) => state.dashMenu.openBlogForm);
  const blogs = useSelector((state) => state.blog.blog);

  const dispatch = useDispatch()

  return (
    <div className="blog_dash" style={{ padding: '20px' }}>
      <div className="blog_view">
        <div className="blog_view_head">
          <h3>Blogs</h3>
          <div className="add_blog">
            <button onClick={() => dispatch(handleOpenBlogForm())}>Post Blog</button>
          </div>
        </div>
        <div className="blog_view_details">
          {
            blogs.length === 0 ? (
              <div className='noItem'>
                <p>No Blogs</p>
              </div>
            ) : blogs.map((blog) => (
              <BlogDetails image={blog.image} title={blog.title} summary={blog.summary} author={blog.author} />
            ))
          }
        </div>
      </div>
      <div style={
        {
          position: 'fixed',
          bottom: '2%', 
          right: '3%', 
          width: '30px', 
          height: '30px', 
          borderRadius: '50%', 
          background: 'black', 
          color: 'white', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center'
        }
      } className="add_blog" onClick={() => dispatch(handleOpenBlogForm())}>
        <FaPlus />
      </div>
      {
        blogForm && <BlogForm />
      }
    </div>
  )
}

export default BlogDashMain