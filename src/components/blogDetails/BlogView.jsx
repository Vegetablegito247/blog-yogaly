import React, { useEffect, useState } from 'react';
import './blogView.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogView } from '../../store/blogStore';

function BlogView() {
    const { id } = useParams();

    const blogDetails = useSelector((state) => state.blog.blogView);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBlogView(id));
    }, []);

    return (
        <>
            <Navbar />
            <header className='view_header'>
                <img src={blogDetails.image} alt="" />
            </header>
            <main>
                <section>
                    <div className='view_title'>
                        <h1>{blogDetails.title}</h1>
                        <div className='view_author'>
                            <span>{blogDetails.author}</span>
                            <span>2mins read</span>
                        </div>
                    </div>
                    <div className='view_content'>
                        <p>{blogDetails.content}</p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default BlogView