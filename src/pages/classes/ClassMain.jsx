import React, { useEffect } from 'react';
import { classes } from '../../data/data';
import { Link } from 'react-router-dom';
import './classMain.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlog } from '../../store/blogStore';
import ClassForm from '../../components/classForm/ClassForm';
import { handleOpenPayForm } from '../../store/dashStore';

function ClassMain() {
    const blogClass = classes;
    const dispatch = useDispatch();
    const payForm = useSelector((state) => state.dashMenu.openPayForm)

    // Uncomment this line of code when you fix the bug from the api and the line of code above this message.

    // const blogClass = useSelector((state) => state.classes.class);

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(fetchBlog());
    // }, [])
    return (
        <main>
            <section>
                <div className="blogs">
                    {
                        blogClass.map((blog) => (
                            <div key={blog._id} className="blog_detail">
                                <div className="blog_img">
                                    <img src={blog.image} alt="" />
                                </div>
                                <div className="blog_info">
                                    <div className="blog_info_head">
                                        <h3>{blog.title}</h3>
                                        <p>{blog.instructor} | {blog.date}</p>
                                    </div>
                                    <div onClick={() => dispatch(handleOpenPayForm())} className="blog_blog">
                                        <p>{blog.summary}</p>
                                        <button>Book Class</button>
                                    </div>
                                </div>
                            </div>
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
            
            {
                payForm && <ClassForm
                    title='Testing'
                    tutor='Testing'
                    time='12:45pm'
                    description='Testing to see if it works'
                    price='20,000'
                />
            }
        </main>
    )
}

export default ClassMain