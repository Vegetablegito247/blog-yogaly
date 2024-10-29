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
        <div className="blog_dash" style={{ padding: '20px' }}>
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
            } className="add_blog" onClick={() => dispatch(handleOpenClassForm())}>
                <FaPlus />
            </div>
            {
                classForm && <ClassForm />
            }
        </div>
    )
}

export default ClassDashMain