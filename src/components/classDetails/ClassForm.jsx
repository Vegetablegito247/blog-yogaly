import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBlog } from '../../store/blogStore';
import { handleOpenClassForm } from '../../store/dashStore';
import { MdOutlineClose } from "react-icons/md";
import { fetchClass, postClass } from '../../store/classStore';

function ClassForm() {
    const dispatch = useDispatch();
    const [blogData, setBlogData] = useState({
        title: '',
        time: '',
        description: '',
        tutor: '',
        image: null
    });

    const [error, setError] = useState({});

    const validateForm = () => {
        const newError = {};

        if (!blogData.title.trim()) {
            newError.title = 'Title is required';
        }
        if (!blogData.time.trim()) {
            newError.time = 'time is required';
        }
        if (!blogData.description.trim()) {
            newError.description = 'description is required';
        }
        if (!blogData.tutor.trim()) {
            newError.tutor = 'tutor is required';
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
            }))
        } else {
            setBlogData((prevState) => ({
                ...prevState,
                [name]: value
            }))
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(validateForm()) {
            dispatch(postClass(blogData));
            dispatch(fetchClass())

            setBlogData({
                title: '',
                time: '',
                description: '',
                tutor: '',
                image: null
            });

            dispatch(handleOpenClassForm());
        }
    }

    return (
        <div className='blog_form'>
            <form action="" onSubmit={handleSubmit}>
                <div className="closeFrm" onClick={() => dispatch(handleOpenClassForm())}>
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
                        <textarea
                            name="description"
                            value={blogData.description}
                            onChange={handleChange}
                            placeholder="description"
                        />
                        {error.description && <span className='err_msg'>{error.description}</span>}
                    </div>
                    <div className="inp_ctrl">
                        <input
                            type="text"
                            name="tutor"
                            value={blogData.tutor}
                            onChange={handleChange}
                            placeholder="Tutor"
                        />
                        {error.tutor && <span className='err_msg'>{error.tutor}</span>}
                    </div>
                    <div className="inp_ctrl">
                        <input
                            type='time'
                            name="time"
                            value={blogData.time}
                            onChange={handleChange}
                            placeholder="Time"
                        />
                        {error.time && <span className='err_msg'>{error.time}</span>}

                    </div>
                    <div className="inp_ctrl">
                        <input
                            type="file"
                            name="image"
                            onChange={handleChange}
                        />
                        {error.image && <span className='err_msg'>{error.image}</span>}
                    </div>
                </div>
                <div className="frm_btn">
                    <button type='submit'>Upload Class</button>
                </div>
            </form>
        </div>
    )
}

export default ClassForm