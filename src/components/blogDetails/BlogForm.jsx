import React, { useState } from 'react';
import './blogForm.css';
import { useDispatch } from 'react-redux';
import { fetchBlog, postBlog } from '../../store/blogStore';
import { handleOpenBlogForm } from '../../store/dashStore';
import { MdOutlineClose } from "react-icons/md";

function BlogForm() {
    const dispatch = useDispatch();
    const [blogData, setBlogData] = useState({
        title: '',
        summary: '',
        content: '',
        author: '',
        image: null
    });

    const [error, setError] = useState({});

    const validateForm = () => {
        const newError = {};

        if (!blogData.title.trim()) {
            newError.title = 'Title is required';
        }
        if (!blogData.summary.trim()) {
            newError.summary = 'Summary is required';
        }
        if (!blogData.content.trim()) {
            newError.content = 'Content is required';
        }
        if (!blogData.author.trim()) {
            newError.author = 'Author is required';
        }
        if (!blogData.image) {
            newError.image = 'Image is required';
        }

        setError(newError);
        return Object.keys(newError).length === 0;
    }

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'image') {
            setBlogData((prevState) => ({
                ...prevState,
                image: files[0]
            }));
        } else {
            setBlogData((prevState) => ({
                ...prevState,
                [name]: value
            }))
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const formData = new FormData();

            formData.append('title', blogData.title);
            formData.append('summary', blogData.summary);
            formData.append('content', blogData.content);
            formData.append('author', blogData.author);
            formData.append('image', blogData.image);

            dispatch(postBlog(formData));
            dispatch(fetchBlog());

            setBlogData({
                title: '',
                summary: '',
                content: '',
                author: '',
                image: null
            })

            dispatch(handleOpenBlogForm());

        }
    }

    return (
        <div className='blog_form'>
            <form action="" onSubmit={handleSubmit}>
                <div className="closeFrm" onClick={() => dispatch(handleOpenBlogForm())}>
                    <MdOutlineClose />
                </div>
                <div className="frm_inp">
                    <div className="inp_ctrl">
                        <input
                            type="text"
                            name="title"
                            value={blogData.title}
                            onChange={handleChange}
                            placeholder="Title"
                        />
                        {error.title && <span className='err_msg'>{error.title}</span>}

                    </div>
                    <div className="inp_ctrl">
                        <input
                            type="text"
                            name="summary"
                            value={blogData.summary}
                            onChange={handleChange}
                            placeholder="Summary"
                        />
                        {error.summary && <span className='err_msg'>{error.summary}</span>}

                    </div>
                    <div className="inp_ctrl">
                        <textarea
                            name="content"
                            value={blogData.content}
                            onChange={handleChange}
                            placeholder="Content"
                        />
                        {error.content && <span className='err_msg'>{error.content}</span>}
                    </div>
                    <div className="inp_ctrl">
                        <input
                            type="text"
                            name="author"
                            value={blogData.author}
                            onChange={handleChange}
                            placeholder="Author"
                        />
                        {error.author && <span className='err_msg'>{error.author}</span>}
                    </div>
                    <div className="inp_ctrl">
                        <input
                            type="file"
                            name="image"
                            accept='image/*'
                            onChange={handleChange}
                        />
                        {error.image && <span className='err_msg'>{error.image}</span>}
                    </div>
                </div>
                <div className="frm_btn">
                    <button type='submit'>Upload Blog</button>
                </div>
            </form>
        </div>
    )
}

export default BlogForm