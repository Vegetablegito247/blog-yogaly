import React from 'react';
import { classes } from '../../data/data';
import { Link } from 'react-router-dom';
import './classMain.css';

function ClassMain() {
    const blogClass = classes
    return (
        <main>
            <section>
                <div className="blogs">
                    {
                        blogClass.map((blog) => (
                            <Link to='' key={blog.id} className="blog_detail">
                                <div className="blog_img">
                                    <img src={blog.image} alt="" />
                                </div>
                                <div className="blog_info">
                                    <div className="blog_info_head">
                                        <h3>{blog.title}</h3>
                                        <p>{blog.instructor} | {blog.date}</p>
                                    </div>
                                    <div className="blog_blog">
                                        <p>{blog.summary}</p>
                                        <button>Book Class</button>
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

export default ClassMain