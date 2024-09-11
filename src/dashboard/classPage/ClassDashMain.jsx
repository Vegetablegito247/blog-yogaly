import React from 'react';
import ClassDetails from '../../components/classDetails/ClassDetails';
import { FaPlus } from "react-icons/fa";
import ClassForm from '../../components/classDetails/ClassForm';
import { handleOpenClassForm } from '../../store/dashStore'
import { useDispatch, useSelector } from 'react-redux';

function ClassDashMain() {
    const classForm = useSelector((state) => state.dashMenu.openClassForm);
    const classes = useSelector((state) => state.classes.class);

    const dispatch = useDispatch()
    return (
        <div className="blog_dash">
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
            <div className="add_blog" onClick={() => dispatch(handleOpenClassForm())}>
                <FaPlus />
            </div>
            {
                classForm && <ClassForm />
            }
        </div>
    )
}

export default ClassDashMain