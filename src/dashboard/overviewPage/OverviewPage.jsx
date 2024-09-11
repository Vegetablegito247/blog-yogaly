import React from 'react'
import DashHead from '../../components/dashHead/DashHead'
import BlogDetails from '../../components/blogDetails/BlogDetails'
import ClassDetails from '../../components/classDetails/ClassDetails'
import SubDetail from '../../components/subDetail/SubDetail'
import test from '../../images/class1.jpg'
import './overView.css'
import { handleOpenBlogForm, handleOpenClassForm } from '../../store/dashStore'
import { useDispatch, useSelector } from 'react-redux'
import BlogForm from '../../components/blogDetails/BlogForm'
import ClassForm from '../../components/classDetails/ClassForm'

function OverviewPage() {
    const blogForm = useSelector((state) => state.dashMenu.openBlogForm);
    const classForm = useSelector((state) => state.dashMenu.openClassForm);

    const blogs = useSelector((state) => state.blog.blog);
    const classes = useSelector((state) => state.classes.class);

    const dispatch = useDispatch()
    return (
        <div className="overview">
            <DashHead headTitle='Overview' />
            <div className="overview_content">
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

                <div className="blog_view">
                    <div className="blog_view_head">
                        <h3>Classes</h3>
                        <div className="add_blog">
                            <button onClick={() => dispatch(handleOpenClassForm())}>Post Class</button>
                        </div>
                    </div>
                    <div className="blog_view_details">
                        {
                            classes.length === 0 ? (
                                <div className='noItem'>
                                    <p>No Classes</p>
                                </div>
                            ) : classes.map((blog) => (
                                <ClassDetails image={blog.image} title={blog.title} description={blog.description} tutor={blog.tutor} time={blog.time} />
                            ))
                        }
                    </div>
                </div>

                <div className="subscriber_view">
                    <div className="sub_view_head">
                        <h3>Subscribers</h3>
                        <div className="view">
                            <button>View more</button>
                        </div>
                    </div>
                    <div className="sub_view_info">
                        <SubDetail />
                    </div>
                </div>
            </div>
            {
                blogForm && <BlogForm />
            }
            {
                classForm && <ClassForm />
            }
        </div>
    )
}

export default OverviewPage