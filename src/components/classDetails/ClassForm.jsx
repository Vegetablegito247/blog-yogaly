import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBlog } from '../../store/blogStore';
import { handleOpenClassForm } from '../../store/dashStore';
import { MdOutlineClose } from "react-icons/md";
import { fetchClass, postClass } from '../../store/classStore';

function ClassForm() {
    const dispatch = useDispatch();
    const [classData, setClassData] = useState({
        title: '',
        time: '',
        description: '',
        tutor: '',
        price: '',
        image: null
    });

    const [error, setError] = useState({});

    const validateForm = () => {
        const newError = {};

        if (!classData.title.trim()) {
            newError.title = 'Title is required';
        }
        if (!classData.time.trim()) {
            newError.time = 'time is required';
        }
        if (!classData.description.trim()) {
            newError.description = 'description is required';
        }
        if (!classData.tutor.trim()) {
            newError.tutor = 'tutor is required';
        }
        if (!classData.price.trim()) {
            newError.price = 'price is required';
        }
        if (!classData.image) {
            newError.image = 'Image is required';
        }

        setError(newError);
        return Object.keys(newError).length === 0;
    }

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'image') {
            setClassData((prevState) => ({
                ...prevState,
                image: files[0]
            }))
        } else {
            setClassData((prevState) => ({
                ...prevState,
                [name]: value
            }))
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const formData = new FormData()

            formData.append('title', classData.title);
            formData.append('time', classData.time);
            formData.append('description', classData.description);
            formData.append('tutor', classData.tutor);
            formData.append('price', classData.price);
            formData.append('image', classData.image);

            dispatch(postClass(formData));
            dispatch(fetchClass())

            setClassData({
                title: '',
                time: '',
                description: '',
                tutor: '',
                price: '',
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
                            value={classData.title}
                            onChange={handleChange}
                            placeholder="Title"
                        />
                        {error.title && <span className='err_msg'>{error.title}</span>}

                    </div>
                    <div className="inp_ctrl">
                        <textarea
                            name="description"
                            value={classData.description}
                            onChange={handleChange}
                            placeholder="description"
                        />
                        {error.description && <span className='err_msg'>{error.description}</span>}
                    </div>
                    <div className="inp_ctrl">
                        <input
                            type="text"
                            name="tutor"
                            value={classData.tutor}
                            onChange={handleChange}
                            placeholder="Tutor"
                        />
                        {error.tutor && <span className='err_msg'>{error.tutor}</span>}
                    </div>
                    <div className="inp_ctrl">
                        <input
                            type='time'
                            name="time"
                            value={classData.time}
                            onChange={handleChange}
                            placeholder="Time"
                        />
                        {error.time && <span className='err_msg'>{error.time}</span>}
                    </div>
                    <div className="inp_ctrl">
                        <input
                            type='text'
                            name="price"
                            value={classData.price}
                            onChange={handleChange}
                            placeholder="Price"
                        />
                        {error.price && <span className='err_msg'>{error.price}</span>}
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