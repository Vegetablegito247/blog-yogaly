import React, { useEffect } from 'react';
import { blogs } from '../../data/data';
import './blogMain.css';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlog } from '../../store/blogStore';

function BlogMain() {
    const blogs = useSelector((state) => state.blog.blog);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBlog());
    }, []);

    return (
        <main>
            <section>
                <div className="blogs">
                    {
                        blogs.map((blog) => (
                            <Link to={`/blog/${blog._id}`} key={blog._id} className="blog_detail">
                                <div className="blog_img">
                                    <img src={blog.image} alt="" />
                                </div>
                                <div className="blog_info">
                                    <div className="blog_info_head">
                                        <h3>{blog.title}</h3>
                                        <p>{blog.author} {blog.date}</p>
                                    </div>
                                    <div className="blog_blog">
                                        <p>{blog.summary}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </section>

            <section>
                <div className="newsletter">
                    <div className="news_cont">
                        <div className="newsletter_head">
                            <h3>Subscribe to our Newsletter</h3>
                            <p>Sign up to recieve news and update</p>
                        </div>
                        <div className="newsletter_form">
                            <form action="">
                                <div className="news_inp">
                                    <div className="news_ctrl">
                                        <input type="text" id="" placeholder='First name' />
                                    </div>
                                    <div className="news_ctrl">
                                        <input type="text" id="" placeholder='Last name' />
                                    </div>
                                    <div className="news_ctrl">
                                        <input type="email" id="" placeholder='Email' />
                                    </div>
                                </div>
                                <div className="news_btn">
                                    <button>Sign up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default BlogMain