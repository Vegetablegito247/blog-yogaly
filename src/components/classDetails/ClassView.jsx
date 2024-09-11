import React, { useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClassView } from '../../store/classStore';

function ClassView() {
    const { id } = useParams();
    const classView = useSelector((state) => state.classes.classView);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchClassView(id))
    }, [])

    return (
        <>
            <Navbar />
            <header className='view_header'>
                <img src={classView.image} alt="" />
            </header>
            <main>
                <section>
                    <div className='view_title'>
                        <h1>{classView.title}</h1>
                        <div className='view_author'>
                            <span>{classView.tutor}</span>
                            <span>2mins read</span>
                        </div>
                    </div>
                    <div className='view_content'>
                        <p>{classView.description}</p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default ClassView